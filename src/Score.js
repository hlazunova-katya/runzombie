import LevelHandler from './LevelHandler';

export default class Score {
  constructor() {
    this.score = 0;
    this.div = document.createElement('header');
    this.levelSpan = document.createElement('span');
    this.levelSpan.innerText = `Level ${LevelHandler.level}`;
    this.parentSpan = document.createElement('span');
    this.parentSpan.classList.add('score');
    this.parentSpan.innerText = 'Score: ';
    this.childSpan = document.createElement('span');
    this.childSpan.innerText = this.score;
    this.parentSpan.appendChild(this.childSpan);
    this.div.appendChild(this.levelSpan);
    this.div.appendChild(this.parentSpan);
    document.body.appendChild(this.div);
  }
  add(num) {
    this.score += num;
    this.childSpan.innerText = this.score;
  }
  restart() {
    this.score = 0;
    this.childSpan.innerText = this.score;
    this.levelSpan.innerText = `Level ${LevelHandler.level}`;
  }
}
