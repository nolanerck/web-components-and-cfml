component 
{
    public array function getGuitarists() access="remote"
    {
        var rockstars = [

            { "name": "Eddie Van Halen", "band": "Van Halen" },
            { "name": "Kirk Hammet", "band": "Metallica" },
            { "name": "Larry Lalonde", "band": "Primus" },
            { "name": "Bobby Adams", "band": "7 Seconds" },
            { "name": "Billie Joe Armstrong", "band": "Green Day" }
        
        ];

        return rockstars;
    }
    
}