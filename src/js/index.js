//  Constants
const TILE_SIZE = 85;
//  Player selction
const player = document.getElementById( 'player' );



/*

document.addEventListener( 'DOMContentLoaded', () => {
  //  Player position
  let xpos = player.offsetLeft;

  //  Click player mouth open
  document.addEventListener( 'keydown', ( event ) => {
    if ( event.code === 'ArrowRight' ) {

      //  Mouth opens
      player.style.backgroundPositionX = '170px';

      //  Player moves
      xpos = xpos + TILE_SIZE;
      player.style.left = `${xpos}px`;

    }

    if ( event.code === 'ArrowLeft' ) {
      //  Mouth opens
      player.style.backgroundPositionX = '170px';

      //  Player moves
      xpos = xpos - TILE_SIZE;
      player.style.left = `${xpos}px`;
    }
  } );

  //  Click reset player mouth close
  document.addEventListener( 'keyup', ( event ) => {
    if ( event.code === 'ArrowRight' || event.code === 'ArrowLeft' ) {

      //  Mouth closes
      player.style.backgroundPositionX = '85px';
    }
  } );

} );

*/

const newPacman = new Pacman( 85, 0, 0 );