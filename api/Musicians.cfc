component 
{
    remote array function getGuitarists( string genre="" )
    {
        var rockstars = [
            { "name": "Dave Mustaine", "band": "Megadeth", genre="metal" },
            { "name": "Kirk Hammet", "band": "Metallica", genre="metal" },
            { "name": "Scott Ian", "band": "Anthrax", genre="metal" },
            { "name": "Tim Armstrong", "band": "Rancid", genre="punk" },
            { "name": "Larry Lalonde", "band": "Primus", genre="alternative" },
            { "name": "Bobby Adams", "band": "7 Seconds", genre="punk" },
            { "name": "Billie Joe Armstrong", "band": "Green Day", genre="punk" }
        ];

        if( arguments.genre.len() gt 0 )
        {
            rockstars = rockstars.filter( function( item ) {
                return ( item.genre eq genre ) ? true : false;
            });
        }
        
        return rockstars;
    }
    
}