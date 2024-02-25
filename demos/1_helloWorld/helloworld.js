class HelloWorld extends HTMLElement 
{
    connectedCallback() 
    {
      this.textContent = 'Hello and welcome to ColdFusion Online Summit 2024!';
    }
  
}

// register it with the CustomElementRegistry to define it for use
customElements.define( 'hello-world', HelloWorld );

