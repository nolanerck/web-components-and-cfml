/**
 * This demo was pretty heavily inspired by / stolen from Raymond Camden's blog
 * entry about making a web component to handle multi step forms:
 * https://www.raymondcamden.com/2023/02/10/progressively-enhancing-a-form-with-web-components
 * 
 * Thanks, Raymond!
 */

class SlideShow extends HTMLElement
{
    constructor()
    {
        super();

        const _shadow    = this.attachShadow( { mode:'open' } );
        this.totalImgs  = this.querySelectorAll('img').length;
        this.current = 0;

        const _wrapper = document.createElement( 'div' );
        _wrapper.innerHTML = `
            <slot></slot>
            <p>
            <button id="prevButton">Previous</button> 
            Image <span id="currentImgNum">1</span> of <span id="totalPictures">${ this.totalImgs }</span>
            <button id="nextButton">Next</button> 
            </p>
        `;

        this.$nextButton = _wrapper.querySelector( '#nextButton' );
        this.$prevButton = _wrapper.querySelector( '#prevButton' );
	
		this.$currentImgNum = _wrapper.querySelector( '#currentImgNum' );

		_shadow.appendChild( _wrapper );
    }

    connectedCallback() 
    {
		this.$nextButton.addEventListener( 'click', e => this.nextImage( e ) );
		this.$prevButton.addEventListener( 'click', e => this.prevImage( e ) );
		this.$images = this.querySelectorAll( 'img' );

		this.$images.forEach( s => 
        {
			s.style.display='none';
		});

		this.updateImage();
	}    

    nextImage() 
    {
		if( this.current + 1 == this.totalImgs )
        {
            return;
        }

		this.current++;
		this.updateImage();
	}

	prevImage() 
    {
		if( this.current == 0 )
        {
            return; 
        }

		this.current--;
		this.updateImage();
	}    

    updateImage() 
    {
		this.$images.forEach( ( s, x ) => 
        {
			if( x === this.current )
            {
                this.$images[ x ].style.display = 'block';
            }
			else 
            {
                this.$images[ x ].style.display = 'none';
            }
		});

        this.$currentImgNum.innerHTML = this.current + 1;

	}
}

customElements.define( 'slide-show', SlideShow );