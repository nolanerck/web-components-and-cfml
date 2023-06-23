<cfhttp url="http://127.0.0.1:65417/api/legacy.cfm" result="rockstars" />
<!--- <cfhttp url="http://127.0.0.1:65417/api/Musicians.cfc?method=getGuitarists&returnformat=json" result="rockstars" /> --->

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
