<?php

    $rockstars = [

        [ "name" => "Eddie Van Halen", "band" => "Van Halen" ],
        [ "name" => "Kirk Hammet", "band" => "Metallica" ],
        [ "name" => "Larry Lalonde", "band" => "Primus" ],
        [ "name" => "Bobby Adams", "band" => "7 Seconds" ],
        [ "name" => "Billie Joe Armstrong", "band" => "Green Day" ]
    ];


    // CORS headers so the local demos work without security problems.
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header("Access-Control-Allow-Headers: X-Requested-With");

    header( 'Content-Type: application/json; charset=utf-8' );
    echo json_encode( $rockstars );
?>
