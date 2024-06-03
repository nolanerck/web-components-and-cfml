class ParentComp extends HTMLElement 
{
    connectedCallback() 
    {
      // this.innerHTML = '<div>Begin Parent Component... <slot></slot> ...and end Parent Component</div> ';
      
      const shadow = this.attachShadow( { mode: 'closed' } );
      shadow.innerHTML = `<div>Begin Parent Component... <slot></slot> ...and end Parent Component</div>`;
    }
  
}

// register it with the CustomElementRegistry to define it for use
customElements.define( 'parent-comp', ParentComp );

