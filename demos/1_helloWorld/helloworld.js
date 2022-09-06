class HelloWorld extends HTMLElement 
{
    connectedCallback() 
    {
      this.textContent = 'Hello and welcome to Into The Box!';
    }
  
}

// register it with the CustomElementRegistry to define it for use
customElements.define( 'hello-world', HelloWorld );

