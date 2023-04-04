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
    this.textContent = `<div>Hello, ${ this.firstname } ${ this.lastname }, and welcome to CF Summit East!</div>`;
  }
  
}

// register component
customElements.define( 'hello-world', HelloWorld );
