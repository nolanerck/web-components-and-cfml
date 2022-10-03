component 
{
    remote array function getGuitarists( string genre="" )
    {
        var rockstars = [
            { "name": "Eddie Van Halen", "band": "Van Halen", genre="rock" },
            { "name": "Kirk Hammet", "band": "Metallica", genre="metal" },
            { "name": "Larry Lalonde", "band": "Primus", genre="alternative" },
            { "name": "Bobby Adams", "band": "7 Seconds", genre="punk" },
            { "name": "Billie Joe Armstrong", "band": "Green Day", genre="punk" }
        ];

        return rockstars;
    }
    
}