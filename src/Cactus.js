const img = new Image();
img.src = './assets/img/Caktus.png';

export default class Cactus {
  constructor(posX, posY, speed) {
    this.img = img;
    this.height = 100;
    this.width = 100;
    this.posX = posX;
    this.posY = posY;
    this.tick = 0;
    this.speed = speed;
  }
}
