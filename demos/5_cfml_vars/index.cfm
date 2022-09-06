<cfset rockstars = [

    { name: "Eddie Van Halen", band: "Van Halen" },
    { name: "Kirk Hammet", band: "Metallica" },
    { name: "Larry Lalonde", band: "Primus" },
    { name: "Bobby Adams", band: "7 Seconds" },
    { name: "Billie Joe Armstrong", band: "Green Day" }

] />

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

    <cfoutput>
        <cfloop array="#rockstars#" index="curItem">
            <guitar-player name="#curItem.name#" 
                           band="#curItem.band#">
            </guitar-player>
        </cfloop>
    </cfoutput>

    <script src="guitarplayer.js"></script>
</body>
</html>