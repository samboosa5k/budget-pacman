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
        //  Controls should get 'true' parameters by default
        //  If pacman dies, control will be set to false
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
                console.log( 'down' );
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
        console.log( 'up' );
        this.ypos = this.ypos - TILE_SIZE;
    }

    moveDown() {
        console.log( 'down' );
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
        this.pacDiv.id = 'player';
        this.pacDiv.classList = 'entity entity--pac pacboy-active-light';
    }

    mount( parent ) {
        this.render();
        console.log( parent );
        parent.appendChild( this.pacDiv );
    }

    update() {
        this.pacDiv.style.left = `${this.xpos}px`;
        this.pacDiv.style.top = `${this.ypos}px`;
        //  Written below changes the x/y coordinates of the pacman face sprite
        this.pacDiv.style.backgroundPositionX = `${this.mouth[0]}px`;
        this.pacDiv.style.backgroundPositionY = `${this.mouth[1]}px`;
    }
}