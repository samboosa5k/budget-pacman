/* 

Notes:
- mouth = open OR closed state
- xpos = horizontal position

*/


class Pacman {
    constructor( mouth, xpos ) {
        this.mouth = mouth;
        this.xpos = xpos;
        //  Initialize
        this.controls();
    }

    controls() {
        document.addEventListener( 'keydown', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.mouth = 170;
                this.moveRight();
            }

            if ( event.code === 'ArrowLeft' ) {
                this.mouth = 170;
                this.moveLeft();
            }

            this.update();
        } );

        document.addEventListener( 'keyup', ( event ) => {
            if ( event.code === 'ArrowRight' || event.code === 'ArrowLeft' ) {
                this.mouth = 85;
            }

            this.update();
        } )
    }

    moveRight() {
        this.xpos = this.xpos + TILE_SIZE;
    }

    moveLeft() {
        this.xpos = this.xpos - TILE_SIZE;
    }

    update() {
        player.style.left = `${this.xpos}px`;
        player.style.backgroundPositionX = `${this.mouth}px`;
    }
}