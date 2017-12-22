export default class Background {
  constructor(width, height) {
    this.velocity = 150;
    this.distance = 0;
    this.lastFrameRepaintTime = 0;
    this.width = width;
    this.height = height;
    this.imgs = [];
    this.addLayers();
  }
  addLayers() {
    for (let i = 0; i < 4; i++) {
      this.imgs[i] = new Image();
      this.imgs[i].width = this.width;
      if (i === 2) {
        this.imgs[i].height = 275;
      } else if (i === 3) {
        this.imgs[i].height = 120;
      } else {
        this.imgs[i].height = this.height;
      }

      this.imgs[i].src = `./assets/img/background/layer${i }.png`;
    }
  }
  calcOffset(time) {
    const frameGapTime = time - this.lastFrameRepaintTime;
    this.lastFrameRepaintTime = time;
    return this.velocity * (frameGapTime / 1000);
  }
}
