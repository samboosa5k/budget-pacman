//  Constants
const TILE_SIZE = 85;



document.addEventListener( 'DOMContentLoaded', () => {
  //  Player selction
  const player = document.getElementById( 'player' );

  //  Player position
  let xpos = player.offsetLeft;

  //  Click player mouth open
  document.addEventListener( 'keydown', ( event ) => {
    if ( event.code === 'ArrowRight' ) {

      //  Mouth opens
      console.log( 'Mouth open' );
      player.style.backgroundPositionX = '170px';

      //  Player moves
      console.log( 'Player is moving right' );
      xpos = xpos + TILE_SIZE;
      player.style.left = `${xpos}px`;
      console.log( xpos );
    }

    if ( event.code === 'ArrowLeft' ) {
      //  Mouth opens
      console.log( 'Mouth open' );
      player.style.backgroundPositionX = '170px';

      //  Player moves
      console.log( 'Player is moving left' );
      xpos = xpos - TILE_SIZE;
      player.style.left = `${xpos}px`;
      console.log( xpos );
    }
  } );

  //  Click reset player mouth close
  document.addEventListener( 'keyup', ( event ) => {
    if ( event.code === 'ArrowRight' || event.code === 'ArrowLeft' ) {

      //  Mouth closes
      console.log( 'Mouth closed' );
      player.style.backgroundPositionX = '85px';
    }
  } );


} );
