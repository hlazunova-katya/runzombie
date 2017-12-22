import './game.scss';
import Game from './Game';

const game = new Game();

window.addEventListener('load', () => {
  game.gameInit();
});

window.addEventListener('keydown', (event) => {
  if (event.keyCode === 32) {
    event.preventDefault();
    game.performJump();
  }
});
