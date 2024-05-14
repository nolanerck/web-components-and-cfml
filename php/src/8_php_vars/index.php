<?php
    $rockstars = [

    [ "name" => "Eddie Van Halen", "band" => "Van Halen", "photo" => "eddie-vh.jpg" ],
    [ "name" => "Kirk Hammet", "band" => "Metallica", "photo" => "kirk-hammett.jpg" ],
    [ "name" => "Larry Lalonde", "band" => "Primus", "photo" => "larry.jpg" ],
    [ "name" => "Bobby Adams", "band" => "7 Seconds", "photo" => "bobby-adams.jpg" ],
    [ "name" => "Billie Joe Armstrong", "band" => "Green Day", "photo" => "billie-joe.jpg" ]
    ];
?>

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

    <?php
        foreach( $rockstars as $curItem )
        {
            $curName = $curItem['name'];
            $curBand = $curItem['band'];
            $curPhoto = $curItem['photo'];

            echo "<guitar-player name='{$curName}' 
                    band='{$curBand}'
                    photo='{$curPhoto}'>
            </guitar-player>";
        }
    ?>

    <script src="guitarplayer.js"></script>
</body>
</html>