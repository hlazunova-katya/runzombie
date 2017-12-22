import Audio from './Audio';

// const coinPickSound = new Audio ('./assets/audio/coinPick.wav');

export default function (hero, coins, score) {
  const l = coins.length;
  for (let i = 0; i < l; i++) {
    if (hero.crashWith(coins[i])) {
      score.add(10);
      coins.splice(i, 1);
      //   coinPickSound.play();
      new Audio('./assets/audio/coinPick.wav').play();
      return;
    }
  }
}
