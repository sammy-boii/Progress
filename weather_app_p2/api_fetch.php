<?php

// Student's Name: Samrajya Neupane
// Student's ID: 2408842

// this script fetches from the OpenWeatherAPI, also does time calculations and sets and returns cached data according.

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

include_once('database.php');

$api_key = "e64642dcaf18a4c680f82227fc60e855";

function fetch_data()
{
    $city_name = ""; // for functional scoping

    if (isset($_GET['city']) && !empty($_GET['city'])) {
        $city_name = strtoupper($_GET['city']);
    } else {
        $city_name = "TIRUPPUR";
    }

    global $api_key;

    if ($city_name == 'TIRUPPUR') {

        // the default time is of Morocco so offset is added to make it easier to work with
        $current_time = time() + (4 * 60 * 60) + (45 * 60);

        if (is_numeric(get_latest_data_timestamp())) {
            $time_difference = $current_time - get_latest_data_timestamp();
        } else {
            $time_difference = 86400;
        }

        // returning cached data if $time_difference is less than a day
        if ($time_difference < 86400) {
            if (get_cached_data()) {
                $cached_response = get_cached_data();
                echo $cached_response;
                return;
            }
        }
    }

    try {
        $response = file_get_contents("https://api.openweathermap.org/data/2.5/weather?q=$city_name&appid=$api_key&units=metric");
        if (!$response) {
            echo json_encode(['error' => 'Failed to fetch weather data']);
        }
        if ($city_name == "TIRUPPUR" && $time_difference >= 86400) {
            insert_data($response);
            set_cached_data($response);
        }
        echo $response;
    } catch (Exception $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}

fetch_data();
