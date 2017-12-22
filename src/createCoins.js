import Coin from './Coin';

export default function (posY, arr) {
  const coins = [];
  const pos = { x: 200, y: posY };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        const coin = new Coin(
          'coin',
          4,
          pos.x + 100 * j,
          pos.y - 100 * (arr.length - i),
        );
        coins.push(coin);
      }
    }
  }
  return coins;
}
