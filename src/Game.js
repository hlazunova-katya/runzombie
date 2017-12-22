import Canvas from './Canvas';
import Background from './Background';
import Hero from './Hero';
import createCoins from './createCoins';
import createCactuses from './createCactuses';
import Audio from './Audio';
import catchCoin from './catchCoin';
import Score from './Score';
import getModal from './getModal';
import LevelHandler from './LevelHandler';

let instance = null;

export default class Game {
  constructor() {
    if (instance) {
      return instance;
    }
    // this.modal = new Modal (this);
    this.bgCanvas = new Canvas(window.innerWidth, window.innerHeight, 'bg');
    this.heroCanvas = new Canvas(
      window.innerWidth,
      window.innerHeight,
      'heroCanvas',
    );
    this.coinCanvas = new Canvas(
      window.innerWidth,
      window.innerHeight,
      'coinCanvas',
    );
    this.score = new Score();
    this.mainAudio = new Audio('./assets/audio/background-music.mp3');
    this.mainAudio.sound.setAttribute('loop', 'true');
    this.bg = new Background(
      this.bgCanvas.canvas.width,
      this.bgCanvas.canvas.height,
    );
    this.run = null;
    this.jump = null;
    this.coins = null;
    this.cactuses = null;
    this.isRender = null;
    this.hero = null;
    this.levelScheme = null;
    this.requestID = null;
    instance = this;
  }
  gameInit() {
    this.startGame();
    this.requestID = this.mainLoop();
  }
  startGame() {
    this.levelScheme = LevelHandler.getLevelScheme();
    this.score.restart();
    this.run = new Hero(
      'run',
      this.heroCanvas.canvas.height,
      false,
      false,
      10,
    );
    this.jump = new Hero(
      'jump',
      this.heroCanvas.canvas.height,
      true,
      false,
      18,
    );
    this.coins = createCoins(
      this.run.posY + this.run.height / 1.5,
      this.levelScheme,
    );

    this.cactuses = createCactuses(
      this.run.posY + this.run.height / 2,
      this.levelScheme,
    );
    this.hero = this.run;
    this.mainAudio.play();
    this.isRender = true;
  }
  stopGame(type) {
    cancelAnimationFrame(this.requestId);
    this.mainAudio.stop();
    this.isRender = false;
    getModal(this, type, this.score.score);
  }
  checkWinOrDead() {
    if (!this.coins.length) {
      this.stopGame('win');
    } else if (
      this.cactuses.length &&
            this.hero.crashWith(this.cactuses[0])
    ) {
      this.stopGame('loose');
    }
  }
  heroSwitch() {
    if (this.hero.isJump) {
      this.hero = this.jump;
      this.run.isJump = false;
    } else {
      this.hero = this.run;
      this.jump.isJump = true;
    }
  }
  areOnStage() {
    for (let i = 0; i < this.cactuses.length; i++) {
      if (this.cactuses[i].posX < -20) {
        this.cactuses.splice(i, 1);
        return;
      }
    }
    for (let i = 0; i < this.coins.length; i++) {
      if (this.coins[i].posX < -20) {
        this.coins.splice(i, 1);
        return;
      }
    }
  }
  mainLoop() {
    if (this.isRender) {
      this.heroSwitch();
      this.checkWinOrDead();
      this.areOnStage();
      catchCoin(this.hero, this.coins, this.score);
      this.coinCanvas.render(this.coins.concat(this.cactuses));
      this.heroCanvas.render([this.hero]);
      this.bgCanvas.render(this.bg, window.performance.now());
    }

    requestAnimationFrame(this.mainLoop.bind(this));
  }

  performJump() {
    if (this.hero === this.run) {
      this.hero.isJump = true;
    }
  }
}
