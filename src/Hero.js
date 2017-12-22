import SpriteSheet from './SpriteSheet';

export default class Hero extends SpriteSheet {
  constructor(name, canvasHeight, isJump, isDie, speed) {
    super(name, speed, 2);
    this.isJump = isJump;
    this.isDie = isDie;
    this.posX = 200;
    this.posY =
            name !== 'jump'
              ? canvasHeight - this.height
              : canvasHeight - this.height - 15;
  }
  crashWith(otherobj) {
    const myleft = this.posX + 20;
    const mytop = this.posY - 40;
    const myright = this.posX + this.width - 30;
    const mybottom = this.posY + this.height - 30;
    const otherleft = otherobj.posX + 10;
    const othertop = otherobj.posY + 10;
    const otherright = otherobj.posX + otherobj.width;
    const otherbottom = otherobj.posY + otherobj.height;

    return !(myright < otherleft ||
            mybottom < othertop ||
            myleft > otherright ||
            mytop > otherbottom);
  }
}
