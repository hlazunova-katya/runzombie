import LevelHandler from './LevelHandler';
import Audio from './Audio';

let game = null;

const overlay = document.createElement('div');
const modal = document.createElement('section');
const p = document.createElement('p');
const BtnsSection = document.createElement('section');
const restartBtn = document.createElement('a');
const nextLvlBtn = document.createElement('a');
const backBtn = document.createElement('a');
const dieSound = new Audio('./assets/audio/die.wav');
const winSound = new Audio('./assets/audio/win.wav');

restartBtn.id = 'restart';
nextLvlBtn.id = 'nextLvl';

backBtn.href = 'index.html';
restartBtn.href = '#';
nextLvlBtn.href = '#';

backBtn.innerText = 'back';
restartBtn.innerText = 'restart';
nextLvlBtn.innerText = 'next lvl';

overlay.classList.add('overlay');
modal.classList.add('modal');
BtnsSection.classList.add('btns-section');

function buttonPressed(button) {
  dieSound.stop();
  winSound.stop();
  BtnsSection.removeChild(backBtn);
  BtnsSection.removeChild(button);
  modal.removeChild(p);
  modal.removeChild(BtnsSection);
  overlay.removeChild(modal);
  document.body.removeChild(overlay);
  game.startGame();
}

BtnsSection.addEventListener('click', (event) => {
  if (event.target !== backBtn) {
    event.preventDefault();
    if (event.target === nextLvlBtn) {
      LevelHandler.nextLevel();
    }
    buttonPressed(event.target);
  }
});


export default function getModal(_game, type, score) {
  game = game || _game;

  if (type === 'win') {
    winSound.play();
  } else {
    dieSound.play();
  }

  p.innerText =
            type === 'win'
              ? `you finished with a score of ${score}`
              : `you are a looser, but you got ${score} points`;

  BtnsSection.appendChild(type === 'win' && LevelHandler.isMoreLevels()
    ? nextLvlBtn
    : restartBtn);
  BtnsSection.appendChild(backBtn);
  modal.appendChild(p);
  modal.appendChild(BtnsSection);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);
}
