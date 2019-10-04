/* 

Notes:
- mouth = open OR closed state
- xpos = horizontal position

*/


class Pacman {
    constructor( mouth, xpos, ypos ) {
        this.mouth = mouth;
        this.xpos = xpos;
        this.ypos = ypos;
        //  Initialize
        this.controls();
    }

    controls() {
        document.addEventListener( 'keydown', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.mouth = [170, 0];
                this.moveRight();
            }

            if ( event.code === 'ArrowLeft' ) {
                this.mouth = [0, -85];
                this.moveLeft();
            }

            if ( event.code === 'ArrowUp' ) {
                this.mouth = [0, 85];
                this.moveUp();
            }

            if ( event.code === 'ArrowDown' ) {
                this.mouth = [0, 170];
                this.moveDown();
            }

            this.update();
        } );

        document.addEventListener( 'keyup', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.mouth = [85, 0];
            }

            if ( event.code === 'ArrowLeft' ) {
                this.mouth = [85, -85];
            }

            if ( event.code === 'ArrowUp' ) {
                this.mouth = [85, 85];
            }

            if ( event.code === 'ArrowDown' ) {
                this.mouth = [85, 170];
            }

            this.update();
        } )
    }

    moveUp() {
        this.ypos = this.ypos - TILE_SIZE;
    }

    moveDown() {
        this.ypos = this.ypos + TILE_SIZE;
    }

    moveRight() {
        this.xpos = this.xpos + TILE_SIZE;
    }

    moveLeft() {
        this.xpos = this.xpos - TILE_SIZE;
    }

    render() {
        this.pacDiv = document.createElement( 'div' );
        this.pacDiv.innerHTML =
            `
            <div id="player" class="entity entity--pac pacboy-active-light" style=""></div>
            `;
    }

    mount( parent ) {
        this.render();
        parent.appendChild( this.pacDiv );
    }

    update() {
        player.style.left = `${this.xpos}px`;
        player.style.top = `${this.ypos}px`;
        //  Written below changes the x/y coordinates of the pacman face sprite
        player.style.backgroundPositionX = `${this.mouth[0]}px`;
        player.style.backgroundPositionY = `${this.mouth[1]}px`;
    }
}