class GuitarPlayers extends HTMLElement 
{
  constructor() 
  {
    super();
    this.name = '[name]';
    this.band = '[band]';
  }

  async findRockStarsAPI()
  {
    // let res = await fetch( "/api/legacy.cfm" );
    let res = await fetch( "/api/Musicians.cfc?method=getGuitarists&returnformat=json&genre=metal" );
    // your framework-1 URL goes here
    // or your ColdBox REST API
    // or your whatever other URL that returns JSON

    let rockstars = await res.json();

    return rockstars;
  }

  // "official" list of the attributes our component cares about
  static get observedAttributes() 
  {
    return ['name','band'];
  }
  
  // when an observed attribute is set or changes
  attributeChangedCallback( property, oldValue, newValue )
  {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }
  
  async connectedCallback() 
  {
    let aryRockstars = await this.findRockStarsAPI();

    const shadow = this.attachShadow( { mode: 'closed' } );    
    shadow.innerHTML = `
      <style>
        :host
        {
            font: Courier;
            font-size: 2.2em;
            color: green;
        }

        .name
        {
          color: black;
        }
      </style>
    `;

    for( let item of aryRockstars )
    {
      let _chunk = `<div>
                      <div class="name">Name: ${ item.name }</div>
                      <div class="band">Band: ${ item.band }</div>
                    </div>`;

      shadow.innerHTML += _chunk;
    }
  }
}

// register component
customElements.define( 'guitar-players', GuitarPlayers );
