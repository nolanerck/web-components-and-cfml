class GuitarPlayer extends HTMLElement 
{
  constructor() 
  {
    super();
    this.name = '[name]';
    this.band = '[band]';
    this.photo = '';
  }

  // "official" list of the attributes our component cares about
  static get observedAttributes() 
  {
    return ['name','band', 'photo'];
  }
  
  // when an observed attribute is set or changes
  attributeChangedCallback( property, oldValue, newValue )
  {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }
  
  connectedCallback() 
  {
    // this.textContent = `<div>Hello, ${ this.firstname } ${ this.lastname }, and welcome to Into The Box!</div>`;

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

      <div>
        <div class="name">Name: ${ this.name }</div>
        <div class="band">Band: ${ this.band }</div>
        <div class="photo">Pic: 
          <img height="300" width="500" src="imgs/${ this.photo }" alt="${ this.name }" />
        </div>
      </div>
    `;
  }
}

// register component
customElements.define( 'guitar-player', GuitarPlayer );
