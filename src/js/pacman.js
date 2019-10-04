/* 

Notes:
- mouth = open OR closed state
- xpos = horizontal position

- pacman will receive stage

*/


class Pacman {
    constructor( mouth, xpos, ypos, stageParam ) {
        this.mouth = mouth;
        this.xpos = xpos;
        this.ypos = ypos;
        this.stageParam = stageParam;
        //  Initialize
        //  Controls should get 'true' parameters by default
        //  If pacman dies, control will be set to false
        this.stage = stage
    }

    detectCollision() {
        return this.stageParam.collisionDetection( this.xpos / 85, this.ypos / 85 ).type;
    }

    controls() {
        document.addEventListener( 'keydown', ( event ) => {
            if ( event.code === 'ArrowRight' ) {
                this.moveRight();
                this.mouth = [170, 0];
            }

            if ( event.code === 'ArrowLeft' ) {
                this.moveLeft();
                this.mouth = [0, -85];
            }

            if ( event.code === 'ArrowUp' ) {
                this.moveUp();
                this.mouth = [0, 85];
            }

            if ( event.code === 'ArrowDown' ) {
                this.moveDown();
                this.mouth = [0, 170];
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
        this.ypos = this.ypos - TILE_SIZE;

        switch ( this.detectCollision() ) {
            case 'wall':
                this.ypos = this.ypos + 85;
                break;
            case 'apple':
                console.log( 'apple is true' );
                break;
        }

    }

    moveDown() {
        this.ypos = this.ypos + TILE_SIZE;

        switch ( this.detectCollision() ) {
            case 'wall':
                this.ypos = this.ypos - 85;
                break;
            case 'apple':
                console.log( 'apple is true' );
                break;
        }
    }

    moveRight() {
        this.xpos = this.xpos + TILE_SIZE;

        switch ( this.detectCollision() ) {
            case 'wall':
                this.xpos = this.xpos - 85;
            case 'apple':
                console.log( 'apple is true' );
                break;

        }

    }

    moveLeft() {
        this.xpos = this.xpos - TILE_SIZE;

        switch ( this.detectCollision() ) {
            case 'wall':
                this.xpos = this.xpos + 85;
                break;
            case 'apple':
                console.log( 'apple is true' );
                break;
        }
    }

    render() {
        this.pacDiv = document.createElement( 'div' );
        this.pacDiv.id = 'player';
        this.pacDiv.classList = 'entity entity--pac pacboy-active-light';
    }

    mount( ) {
        this.render();
        parent.appendChild( this.pacDiv );
    }

    update() {
        this.pacDiv.style.left = `${this.xpos}px`;
        this.pacDiv.style.top = `${this.ypos}px`;

        //  Written below changes the x/y coordinates of the pacman face sprite
        this.pacDiv.style.backgroundPositionX = `${this.mouth[0]*85}px`;
        this.pacDiv.style.backgroundPositionY = `${this.mouth[1]*85}px`;
    }
}