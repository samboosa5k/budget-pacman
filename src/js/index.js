//  Constants
const TILE_SIZE = 85;
//  Player selction
const player = document.getElementById( 'player' );
//  Env selection
const app = document.getElementById( 'app' );





document.addEventListener( 'DOMContentLoaded', () => {
  const app = document.querySelector( '#app' )
  const stage = new Stage( 10, 10 );
  stage.mount( app );
  const stageArea = document.querySelector( '.stage' );

  const wall = new Entity( 1, 1, 'wall' );
  const apple = new Entity( 2, 2, 'apple' );
  const bomb = new Entity( 3, 3, 'bomb' );
  wall.mount( stageArea );
  stage.addEntity( wall );

  apple.mount( stageArea );
  stage.addEntity( apple );

  bomb.mount( stageArea );
  stage.addEntity( bomb );

  const newPacman = new Pacman( 170, 170, 170 );
  newPacman.mount( stageArea );

  // console.log( stage.entities )
  // console.log( stage.collisionDetection( 1, 1 ) )
  // console.log( stage.collisionDetection( 2, 2 ) )

  // bomb.unmount(stageArea)
  stage.removeEntity(bomb);
} );
