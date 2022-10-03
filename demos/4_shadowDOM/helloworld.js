class HelloWorld extends HTMLElement 
{
  constructor() 
  {
    super();
    this.firstname = '[your first name]';
  }

  // "official" list of the attributes our component cares about
  static get observedAttributes() 
  {
    return ['firstname','lastname'];
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
        :host /* this used to be 'hello-world' */
        {
            font: Courier;
            font-size: 2.2em;
            color: green;
        }
      </style>
      <div>Hello, ${ this.firstname } ${ this.lastname }, and welcome to CF Summit 2022!</div>
    `;
  }
  
}

// register component
customElements.define( 'hello-world', HelloWorld );
