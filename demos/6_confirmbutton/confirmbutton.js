class ConfirmButton extends HTMLElement
{
    constructor()
    {
        super();
        const shadow = this.attachShadow( {mode:'open'} );

        this._wrapper = document.createElement( 'button' );
        this._wrapper.innerHTML = `
            <slot></slot>
        `;

        shadow.appendChild( this._wrapper );
    }

    static get observedAttributes() 
    { 
        return [ 'confirmurl' ]; 
    }

    connectedCallback()
    {
        this._wrapper.addEventListener( "click", e => this.doConfirmClick( e ) );
    }

    attributeChangedCallback( property, oldValue, newValue ) 
    {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
	}    

    doConfirmClick( evt )
    {
        if( confirm( "Are you sure you want to proceed?" ) )
        {
            location.href = this.confirmurl;
        }
        else
        {
            return false;
        }
    }
}

customElements.define( 'confirm-button', ConfirmButton );