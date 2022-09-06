<!--- this is my legacy API for older CFML applications that have yet to be modernized. --->

<cfset rockstars = [

    { "name": "Eddie Van Halen", "band": "Van Halen" },
    { "name": "Kirk Hammet", "band": "Metallica" },
    { "name": "Larry Lalonde", "band": "Primus" },
    { "name": "Bobby Adams", "band": "7 Seconds" },
    { "name": "Billie Joe Armstrong", "band": "Green Day" }

] />

<cfsetting enablecfoutputonly="true">

<cfcontent type="application/json" reset="true">

<cfoutput>#serializeJson( rockstars )#</cfoutput>
