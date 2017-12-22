import Coin from './Coin';
import SpriteSheet from './SpriteSheet';
import Cactus from './Cactus';

export default class Canvas {
  constructor(width, height, id) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.id = id;
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);
  }
  render(elements, time) {
    this.ctx.save();
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (Array.isArray(elements)) {
      elements.forEach((item) => {
        if (item instanceof SpriteSheet) {
          this.drawSprite(item);
        } else if (item instanceof Cactus) {
          this.drawCactus(item);
        }
      });
    } else {
      this.drawBackground(elements, time);
    }
    this.ctx.restore();
  }
  drawCactus(item) {
    item.tick++;
    if (item.tick > item.speed) {
      item.tick = 0;
      item.posX -= 30;
    }
    this.ctx.drawImage(
      item.img,
      0,
      0,
      item.img.width,
      item.img.height,
      item.posX - item.width / 2,
      item.posY - item.height / 2,
      item.width,
      item.height,
    );
  }
  drawSprite(item) {
    const spt = item.frames[item.frameIndex];
    item.tickCount += 1;
    this.ctx.drawImage(
      item.img,
      spt.x,
      spt.y,
      spt.w,
      spt.h,
      item.posX - spt.cx / item.sizeDelimiter,
      item.posY - spt.cy / item.sizeDelimiter,
      spt.w / item.sizeDelimiter,
      spt.h / item.sizeDelimiter,
    );

    if (item.tickCount > item.speed) {
      item.tickCount = 0;
      if (item instanceof Coin) {
        item.posX -= 30;
      }
      if (item.isJump) {
        if (item.frameIndex === 0 || item.frameIndex === 1) {
          item.posY -= 150;
        }
        if (item.frameIndex === 2) {
          item.posY += 100;
        }
        if (item.frameIndex === 3) {
          item.posY += 170;
        }
        if (item.frameIndex === 4) {
          item.posY += 30;
          item.isJump = false;
        }
      }
      if (item.frameIndex === item.framesAmount - 1) {
        item.frameIndex = 0;
      } else {
        item.frameIndex++;
      }
      item.width = item.frames[item.frameIndex].w / item.sizeDelimiter;
      item.height = item.frames[item.frameIndex].h / item.sizeDelimiter;
    }
  }
  drawBackground(element, time) {
    element.distance += element.calcOffset(time);
    if (element.distance > this.canvas.width) {
      element.distance = 0;
    }
    this.ctx.translate(-element.distance, 0);
    for (const img of element.imgs) {
      let posY = 0,
        { height } = this.canvas;
      if (img.src.includes('layer2')) {
        posY = height - 275;
        height = 275;
      } else if (img.src.includes('layer3')) {
        posY = height - 120;
        height = 120;
      }
      this.ctx.drawImage(img, img.width, posY, this.canvas.width, height);
      this.ctx.drawImage(img, 0, posY, this.canvas.width, height);
    }
  }
}
