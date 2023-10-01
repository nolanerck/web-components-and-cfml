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
    return ['name', 'band', 'photo'];
  }
  
  // when an observed attribute is set or changes
  attributeChangedCallback( property, oldValue, newValue )
  {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }
  
  connectedCallback() 
  {
    const shadow = this.attachShadow( { mode: 'closed' } );

    shadow.innerHTML = `
      <style>
        :host
        {
            color: black;
        }

        .wrapper
        {
          border: 2px dashed black;
          width: 30%;
          padding: 5px;
          margin-bottom: 10px;
        }

        .name, .band
        {
          font-family: Courier;
          font-size: 24px;
        }

        .name:hover
        {
          color: green;
        }

        .photo img
        {
          object-fit: contain;
        }

        .photo img:hover
        {
          border: 4px dashed red;
        }
      </style>

      <div class="wrapper">
        <span class="name">Name: ${ this.name }</span>&nbsp;&nbsp;&nbsp;
        <span class="band">Band: ${ this.band }</span>
        <div class="photo"> 
          <img height="150" width="250" src="imgs/${ this.photo }" alt="${ this.name }" />
        </div>
      </div>
    `;
  }
}

// register component
customElements.define( 'guitar-player', GuitarPlayer );
