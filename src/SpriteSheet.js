import atlas from './atlas.json';

const img = new Image();
img.src = './assets/img/atlas.png';

export default class SpriteSheet {
  constructor(name, speed, sizeDelimiter) {
    this.name = name;
    this.frames = [];
    this.framesAmount = 0;
    this.defSprites();
    this.frameIndex = 0;
    this.height = this.frames[this.frameIndex].h / sizeDelimiter;
    this.width = this.frames[this.frameIndex].w / sizeDelimiter;
    this.tickCount = 0;
    this.sizeDelimiter = sizeDelimiter;
    this.speed = speed;
    this.img = img;
  }
  defSprites() {
    const framesNames = Object.keys(atlas[this.name]);
    framesNames.forEach((name) => {
      const spt = atlas[this.name][name];
      spt.cx = spt.w / 2;
      spt.cy = spt.h / 2;
      this.frames.push(spt);
    });
    this.framesAmount = this.frames.length;
  }
}
