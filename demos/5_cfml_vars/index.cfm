<cfset rockstars = [

    { name: "Eddie Van Halen", band: "Van Halen", photo: "eddie-vh.jpg" },
    { name: "Kirk Hammet", band: "Metallica", photo: "kirk-hammett.jpg" },
    { name: "Larry Lalonde", band: "Primus", photo: "larry.jpg" },
    { name: "Bobby Adams", band: "7 Seconds", photo: "bobby-adams.jpg" },
    { name: "Billie Joe Armstrong", band: "Green Day", photo: "billie-joe.jpg" }

] />

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

    <cfoutput>
        <cfloop array="#rockstars#" index="curItem">
            <guitar-player name="#curItem.name#" 
                           band="#curItem.band#"
                           photo="#curitem.photo#">
            </guitar-player>
        </cfloop>
    </cfoutput>

    <script src="guitarplayer.js"></script>
</body>
</html>