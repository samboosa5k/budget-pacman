/* 

Notes:
- mouth = open OR closed state
- xpos = horizontal position

*/


class Pacman {
    constructor( mouth, xpos, ypos, stage ) {
        this.mouth = mouth;
        this.xpos = xpos;
        this.ypos = ypos;
        //  Initialize
        //  Controls should get 'true' parameters by default
        //  If pacman dies, control will be set to false
        this.stage = stage
    }

    controls() {
        document.addEventListener( 'keydown', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.mouth = [2, 0];
                this.moveRight();
            }

            if ( event.code === 'ArrowLeft' ) {
                this.mouth = [0, -1];
                this.moveLeft();
            }

            if ( event.code === 'ArrowUp' ) {

                this.mouth = [0, 1];
                this.moveUp();
            }

            if ( event.code === 'ArrowDown' ) {
                console.log( 'down' );
                this.mouth = [0, 2];
                this.moveDown();
            }

            this.update();
        } );

        document.addEventListener( 'keyup', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.mouth = [1, 0];
            }

            if ( event.code === 'ArrowLeft' ) {
                this.mouth = [1, -1];
            }

            if ( event.code === 'ArrowUp' ) {
                this.mouth = [1, 1];
            }

            if ( event.code === 'ArrowDown' ) {
                this.mouth = [1, 2];
            }

            this.update();
        } )
    }

    moveUp() {
        console.log( 'up' );
        this.ypos = this.ypos - 1;
    }

    moveDown() {
        console.log( 'down' );
        this.ypos = this.ypos + 1;
    }

    moveRight() {
        this.xpos = this.xpos + 1;
    }

    moveLeft() {
        this.xpos = this.xpos - 1;
    }

    render() {
        this.pacDiv = document.createElement( 'div' );
        this.pacDiv.id = 'player';
        this.pacDiv.classList = 'entity entity--pac pacboy-active-light';
    }

    mount( ) {
        this.render();
        this.stage.appendChild( this.pacDiv );
    }

    update() {
        this.pacDiv.style.left = `${this.xpos*85}px`;
        this.pacDiv.style.top = `${this.ypos*85}px`;
        //  Written below changes the x/y coordinates of the pacman face sprite
        this.pacDiv.style.backgroundPositionX = `${this.mouth[0]*85}px`;
        this.pacDiv.style.backgroundPositionY = `${this.mouth[1]*85}px`;
    }
}