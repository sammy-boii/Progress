<?php

$api_key = "e64642dcaf18a4c680f82227fc60e855";

// Fetching from the API

function fetch_data()
{
    if (isset($_GET['city'])) {
        $city_name = $_GET['city'];
    } else {
        $city_name = "Tiruppur";
    }

    global $api_key;

    try {
        $response = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=$city_name&appid=$api_key&units=metric");
        header('Content-Type: application/json');
        echo $response;

        return $response;
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

$response = fetch_data();


function insert_data($response)
{
    // Database credentials

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'weather_data_db';

    $conn = mysqli_connect($host, $username, $password, $dbname);
    if (!$conn) {
        die("Connection to $dbname failed" . mysqli_connect_error());
    }

    $data = json_decode($response);

    if (isset($data)) {
        $country = 'India';
        $city = mysqli_real_escape_string($conn, $data->name);
        $timestamp = $data->dt;
        $date = date('Y-m-d', $timestamp);
        $day = date('d', $timestamp);
        $temperature = round($data->main->temp);
        $humidity = round($data->main->humidity);
        $wind = $data->wind->speed;
        $weather_icon = $data->weather[0]->icon;

        $sql = "INSERT INTO weather_data (country_name, city_name, full_date, temperature, humidity, wind_speed, weather_icon)
        VALUES ('$country', '$city', '$date', $temperature, $humidity, $wind, '$weather_icon')";

        if (!mysqli_query($conn, $sql)) {
            die("Error occurred while populating $dbname");
        }
    }

    mysqli_close($conn);
}

insert_data($response);
