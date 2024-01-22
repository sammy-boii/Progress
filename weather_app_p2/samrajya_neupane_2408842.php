<?php

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$api_key = "e64642dcaf18a4c680f82227fc60e855";

// Fetching from the API

function fetch_data()
{
    if (isset($_GET['city'])) {
        $city_name = $_GET['city'];
    } else {
        $city_name = 'Tiruppur';
    }
    global $api_key;

    try {
        $response = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=$city_name&appid=$api_key&units=metric");
        if (!$response) {
            echo json_encode(['error' => 'Failed to fetch weather data']);
        }
        echo $response;
        return $response;
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

$response = fetch_data();

function insert_data($response)
{
    // database credentials

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'weather_data_db';

    // making a connection to the database

    $conn = mysqli_connect($host, $username, $password, $dbname);
    if (!$conn) {
        die("Connection to $dbname failed" . mysqli_connect_error());
    }

    // creating table

    $sql_create_table = "CREATE TABLE IF NOT EXISTS weather_data (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        country VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        temperature INT NOT NULL,
        humidity INT NOT NULL,
        wind_speed INT,
        weather_icon VARCHAR(10),
        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";

    if (!mysqli_query($conn, $sql_create_table)) {
        die("Error creating table: " . mysqli_error($conn));
    }

    $data = json_decode($response);

    if (isset($data)) {
        $country = 'India';
        $city = mysqli_real_escape_string($conn, $data->name);
        $temperature = round($data->main->temp);
        $humidity = round($data->main->humidity);
        $wind_speed = $data->wind->speed;
        $weather_icon = $data->weather[0]->icon;

        $sql = "INSERT INTO weather_data (country, city, temperature, humidity, wind_speed, weather_icon)
                VALUES ('$country', '$city', $temperature, $humidity, $wind_speed, '$weather_icon')";

        if (!mysqli_query($conn, $sql)) {
            die("Error occurred while inserting data: " . mysqli_error($conn));
        }

        mysqli_close($conn);
    }
}

// cron job

while (false) {
    $current_time = time();

    $next_run_time = strtotime('+24 hours', $current_time);

    $sleep_time = $next_run_time - $current_time;

    sleep($sleep_time);

    insert_data($response);
}
