import SpriteSheet from './SpriteSheet';

export default class Coin extends SpriteSheet {
  constructor(name, speed, posX, posY) {
    super(name, speed, 12);
    this.posX = posX;
    this.posY = posY;
  }
}
