<cfhttp url="http://127.0.0.1:8888/api/legacy.cfm" result="rockstars" />
<!--- <cfhttp url="http://127.0.0.1:8888/api/Musicians.cfc?method=getGuitarists&returnformat=json&genre=metal" result="rockstars" /> --->

<cfset aryRockstars = DeserializeJSON( rockstars.filecontent ) />

<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

    <cfoutput>
        <cfloop array="#aryRockstars#" index="curItem">
            <guitar-player name="#curItem.name#" 
                           band="#curItem.band#">
            </guitar-player>
        </cfloop>
    </cfoutput>

    <script src="guitarplayer.js"></script>
</body>
</html>
