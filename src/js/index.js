//  Constants
const TILE_SIZE = 85;
//  Player selction
const player = document.getElementById( 'player' );
//  Env selection
const app = document.getElementById( 'app' );





document.addEventListener( 'DOMContentLoaded', () => {
  const app = document.querySelector( '#app' )
  const newPacman = new Pacman( 85, 0, 0 );
  const stage = new Stage( 10, 10 );
  stage.mount( app );
} );
