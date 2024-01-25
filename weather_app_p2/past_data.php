<?php

// Student's Name: Samrajya Neupane
// Student's ID: 2408842

// this script extracts past data from the database and sends it to setPastData() in JS

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

include_once('database.php');

function getWeatherData()
{
    $conn = connect_to_db();

    $query = "SELECT temperature, weather_icon, timestamp, humidity, wind_speed FROM weather_data";
    $result = mysqli_query($conn, $query);

    if (!$result) {
        die("Query failed: " . mysqli_error($conn));
    }

    $weatherData = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $weatherData[] = $row;
    }

    return $weatherData;
}

echo json_encode(getWeatherData());
