import Cactus from './Cactus';

export default function (posY, arr) {
  const cactuses = [];
  const pos = { x: 200, y: posY };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 2) {
        const cactus = new Cactus(
          pos.x + 100 * j,
          pos.y - 42,
          4,
        );
        cactuses.push(cactus);
      }
    }
  }
  return cactuses;
}
