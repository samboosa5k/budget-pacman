document.addEventListener( 'DOMContentLoaded', () => {
  const player = document.getElementById( 'player' );

  //  Click player mouth open
  document.addEventListener( 'mousedown', () => {
    console.log( 'Mouth open' );
    player.style.backgroundPositionX = '170px';
  } );

  //  Click reset player mouth close
  document.addEventListener( 'mouseup', () => {
    console.log( 'Mouth closed' );
    player.style.backgroundPositionX = '85px';
  } );


} );
