<?php

// Student's Name: Samrajya Neupane
// Student's ID: 2408842

// this script contains the function to connect to the database, get the latest timestamp from the database, get cached json data and set cached json data.
function connect_to_db()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "weather_data_db";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        return false;
    }

    // Create database if not exists
    $sql_create_db = "CREATE DATABASE IF NOT EXISTS $dbname";
    if ($conn->query($sql_create_db) !== TRUE) {
        // Return false on error
        return false;
    }

    // Connect to the created database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        // Return false on error
        return false;
    }

    // Define table structure
    $sql_create_table = "CREATE TABLE IF NOT EXISTS weather_data (
        id INT(6) UNSIGNED AUTO_INCREMENT, 
        country VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        temperature INT,
        humidity INT,
        wind_speed INT,
        weather_icon VARCHAR(10),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    )";

    if (!$conn->query($sql_create_table)) {
        // Return false on error
        return false;
    }

    // Return the connection
    return $conn;
}



function get_latest_data_timestamp()
{
    $conn = connect_to_db();

    $query = "SELECT MAX(timestamp) AS latest_timestamp FROM weather_data";
    $result = mysqli_query($conn, $query);

    if ($result) {
        $row = mysqli_fetch_assoc($result);

        if ($row && isset($row['latest_timestamp'])) {
            return strtotime($row['latest_timestamp']);
        } else {
            return "Database is empty" . mysqli_error($conn);
        }
    } else {
        return "Query failed: " . mysqli_error($conn);
    }
}

function insert_data($response)
{
    $conn = connect_to_db();

    // Check if connection is successful
    if (!$conn) {
        // Handle the error appropriately (e.g., log or throw exception)
        return false;
    }

    $data = json_decode($response, true);

    $country = 'India';
    $city = mysqli_real_escape_string($conn, $data['name']);
    $temperature = isset($data['main']['temp']) ? round($data['main']['temp']) : null;
    $humidity = isset($data['main']['humidity']) ? round($data['main']['humidity']) : null;
    $wind_speed = isset($data['wind']['speed']) ? $data['wind']['speed'] : null;
    $weather_icon = isset($data['weather'][0]['icon']) ? $data['weather'][0]['icon'] : null;

    // Simple query with string interpolation
    $sql = "INSERT INTO weather_data (country, city, temperature, humidity, wind_speed, weather_icon)
            VALUES ('$country', '$city', $temperature, $humidity, $wind_speed, '$weather_icon')";

    // Execute the query
    if (!mysqli_query($conn, $sql)) {
        // Handle the error appropriately (e.g., log or throw exception)
        mysqli_close($conn);
        return false;
    }

    mysqli_close($conn);

    return true;
}


function get_cached_data()
{
    $conn = connect_to_db();

    if (!$conn) return false;

    $sql_create_table = "CREATE TABLE IF NOT EXISTS weather_data_json (
        json_response TEXT
    );";

    if (!mysqli_query($conn, $sql_create_table)) {
        die("Error creating table: " . mysqli_error($conn));
    }

    $sql_fetch_json = "SELECT json_response FROM weather_data_json";
    $result = mysqli_query($conn, $sql_fetch_json);

    if ($result) {
        $row = mysqli_fetch_assoc($result);
        return ($row && isset($row['json_response'])) ? $row['json_response'] : '';
    } else {
        return '';
    }
}

function set_cached_data($json)
{
    $conn = connect_to_db();

    if (!$conn) return false;

    $sql_create_table = "CREATE TABLE IF NOT EXISTS weather_data_json (
        json_response TEXT
    );";

    if (!mysqli_query($conn, $sql_create_table)) {
        die("Error creating table: " . mysqli_error($conn));
    }

    // Truncate the table before inserting new data
    mysqli_query($conn, "TRUNCATE TABLE weather_data_json");

    // Insert new data into the weather_data_json table
    $sql_insert_json = "INSERT INTO weather_data_json (json_response) VALUES ('$json')";
    if (!mysqli_query($conn, $sql_insert_json)) {
        die("Error inserting data: " . mysqli_error($conn));
    }
}
