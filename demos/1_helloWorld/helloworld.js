class HelloWorld extends HTMLElement 
{
    connectedCallback() 
    {
      this.textContent = 'Hello and welcome to Into The Box!';
    }
  
}

customElements.define( 'hello-world', HelloWorld );

