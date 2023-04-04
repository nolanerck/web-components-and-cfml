class GuitarPlayer extends HTMLElement 
{
  constructor() 
  {
    super();
    this.name = '[name]';
    this.band = '[band]';
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
      </div>
    `;
  }
}

// register component
customElements.define( 'guitar-player', GuitarPlayer );
