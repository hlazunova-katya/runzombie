import levels from './levels.json';

let level = 1;
const max = Object.keys(levels).length;

export default class LevelHandler {
  static get level() {
    return level;
  }
  static nextLevel() {
    if (level < max) {
      level += 1;
    }
  }
  static isMoreLevels() {
    return level < max;
  }
  static getLevelScheme() {
    return levels[level];
  }
}
