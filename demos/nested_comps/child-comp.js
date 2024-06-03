class ChildComp extends HTMLElement 
{
    connectedCallback() 
    {
      this.textContent = 'This is a Child component';
    }
  
}

// register it with the CustomElementRegistry to define it for use
customElements.define( 'child-comp', ChildComp );

