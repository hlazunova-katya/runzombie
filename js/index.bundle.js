/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atlas__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__atlas___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__atlas__);


const img = new Image ();
img.src = './assets/img/atlas.png';

class SpriteSheet {
    constructor(name, speed, sizeDelimiter) {
        this.name = name;
        this.frames = [];
        this.framesAmount = 0;
        this.defSprites ();
        this.frameIndex = 0;
        this.height = this.frames[this.frameIndex].h / sizeDelimiter;
        this.width = this.frames[this.frameIndex].w / sizeDelimiter;
        this.tickCount = 0;
        this.sizeDelimiter = sizeDelimiter;
        this.speed = speed;
        this.img = img;
    }
    defSprites() {
        const framesNames = Object.keys (__WEBPACK_IMPORTED_MODULE_0__atlas___default.a[this.name]);
        for (const name of framesNames) {
            const spt = __WEBPACK_IMPORTED_MODULE_0__atlas___default.a[this.name][name];
            spt.cx = spt.w / 2;
            spt.cy = spt.h / 2;
            this.frames.push (spt);
        }
        this.framesAmount = this.frames.length;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpriteSheet;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Audio {
    constructor(src) {
        this.sound = document.createElement ('audio');
        this.sound.src = src;
        this.sound.setAttribute ('preload', 'auto');
        this.sound.setAttribute ('controls', 'none');
        this.sound.style.display = 'none';
        document.body.appendChild (this.sound);
    }

    play() {
        this.sound.currentTime = 0;
        this.sound.play ();
    }
    stop() {
        this.sound.pause ();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Audio;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__levels__);


let level = 1;
const max = Object.keys(__WEBPACK_IMPORTED_MODULE_0__levels___default.a).length;

class LevelHandler {
    static get level () {
        return level;
    }    
    static nextLevel () {
       if (level < max) {
           level++;
       }
    }
    static isMoreLevels () {
        return level < max;
    }
    static getLevelScheme () {
        return  __WEBPACK_IMPORTED_MODULE_0__levels___default.a[level];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LevelHandler;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = gameInit;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__game_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Canvas__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Background__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Hero__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createCoins__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createCactuses__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Audio__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catchCoin__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Score__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__getModal__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__LevelHandler__ = __webpack_require__(2);












const bgCanvas = new __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */](window.innerWidth, window.innerHeight, 'bg', 0),
    heroCanvas = new __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */](
        window.innerWidth / 2,
        window.innerHeight,
        'heroCanvas',
        10
    ),
    coinCanvas = new __WEBPACK_IMPORTED_MODULE_1__Canvas__["a" /* default */](
        window.innerWidth,
        window.innerHeight,
        'coinCanvas',
        10
    );

const score = new __WEBPACK_IMPORTED_MODULE_8__Score__["a" /* default */]();
const mainAudio = new __WEBPACK_IMPORTED_MODULE_6__Audio__["a" /* default */]('./assets/audio/background-music.mp3');
mainAudio.sound.setAttribute('loop', 'true');

const bg = new __WEBPACK_IMPORTED_MODULE_2__Background__["a" /* default */](bgCanvas);
let run = null,
    jump = null;

let coins = null,
    cactuses = null;

let isRender = null,
    hero = null;

let levelScheme = null;

function mainLoop() {
    if (isRender) {
        areOnStage();
        heroSwitch();
        checkWin();
        Object(__WEBPACK_IMPORTED_MODULE_7__catchCoin__["a" /* default */])(hero, coins, score);
        if (cactuses.length) {
            checkDead();
        }
        coinCanvas.render(coins.concat(cactuses));
        heroCanvas.render([hero]);
        bgCanvas.render(bg, window.performance.now());
    }

    requestAnimationFrame(mainLoop);
}
function areOnStage() {
    for (let i = 0; i < cactuses.length; i++) {
        if (cactuses[i].posX < -20) {
            cactuses.splice(i, 1);
            return;
        }
    }
    for (let i = 0; i < coins.length; i++) {
        if (coins[i].posX < -20) {
            coins.splice(i, 1);
            return;
        }
    }
}
function checkWin() {
    if (coins.length === 0) {
        mainAudio.stop();
        isRender = false;
        Object(__WEBPACK_IMPORTED_MODULE_9__getModal__["a" /* default */])('win', score.score);
    }
}
function checkDead() {
    if (hero.crashWith(cactuses[0])) {
        mainAudio.stop();
        isRender = false;
        Object(__WEBPACK_IMPORTED_MODULE_9__getModal__["a" /* default */])('loose', score.score);
    }
}
function heroSwitch() {
    if (hero.isJump) {
        hero = jump;
        run.isJump = false;
    } else {
        hero = run;
        jump.isJump = true;
    }
}
function gameInit() {
    levelScheme = __WEBPACK_IMPORTED_MODULE_10__LevelHandler__["a" /* default */].getLevelScheme();
    score.restart();
    run = new __WEBPACK_IMPORTED_MODULE_3__Hero__["a" /* default */]('run', heroCanvas.canvas.height, false, false, 10);
    jump = new __WEBPACK_IMPORTED_MODULE_3__Hero__["a" /* default */]('jump', heroCanvas.canvas.height, true, false, 18);
    coins = Object(__WEBPACK_IMPORTED_MODULE_4__createCoins__["a" /* default */])(run.posY + run.height / 1.5, levelScheme);
    cactuses = Object(__WEBPACK_IMPORTED_MODULE_5__createCactuses__["a" /* default */])(run.posY + run.height / 2, levelScheme);
    hero = run;
    mainAudio.play();
    isRender = true;
}
window.addEventListener('load', event => {
    const loader = document.getElementById('loader');
    document.body.removeChild(loader);
    gameInit();
    mainLoop();
});
window.addEventListener('keydown', event => {
    if (event.keyCode === 32) {
        event.preventDefault();
        if (hero === run) {
            hero.isJump = true;
        }
    }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpriteSheet__ = __webpack_require__(0);


class Coin extends __WEBPACK_IMPORTED_MODULE_0__SpriteSheet__["a" /* default */] {
    constructor (name, speed, posX, posY) {
        super (name, speed, 12);
        this.posX = posX;
        this.posY = posY;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Coin;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const img = new Image ();
img.src = './assets/img/Caktus.png';

class Cactus {
    constructor (posX, posY, speed) {
        this.img = img;
        this.height = 100;
        this.width = 100;
        this.posX = posX;
        this.posY = posY;
        this.tick = 0;
        this.speed = speed;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cactus;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Coin__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpriteSheet__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Cactus__ = __webpack_require__(5);




class Canvas {
    constructor(width, height, id, zIndex) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = id;
        this.canvas.style.zIndex = zIndex;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    }
    render(elements, time) {
        this.ctx.save();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if (Array.isArray(elements)) {
            elements.forEach(item => {
                // if (item.posX < window.innerWidth) {
                    if (item instanceof __WEBPACK_IMPORTED_MODULE_1__SpriteSheet__["a" /* default */]) {
                        this.drawSprite(item);
                    } else if (item instanceof __WEBPACK_IMPORTED_MODULE_2__Cactus__["a" /* default */]) {
                        this.drawCactus(item);
                    }
                // }
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
            item.height
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
            spt.h / item.sizeDelimiter
        );

        if (item.tickCount > item.speed) {
            item.tickCount = 0;
            if (item instanceof __WEBPACK_IMPORTED_MODULE_0__Coin__["a" /* default */]) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Canvas;



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {"die":{"Dead1.png":{"x":21,"y":727,"w":207,"h":401},"Dead2.png":{"x":1116,"y":302,"w":276,"h":377},"Dead3.png":{"x":742,"y":302,"w":347,"h":349},"Dead4.png":{"x":21,"y":302,"w":425,"h":300},"Dead5.png":{"x":1467,"y":21,"w":417,"h":254},"Dead6.png":{"x":21,"y":21,"w":439,"h":172},"Dead7.png":{"x":487,"y":21,"w":470,"h":186},"Dead8.png":{"x":984,"y":21,"w":456,"h":208}},"jump":{"Jump2.png":{"x":473,"y":302,"w":242,"h":330},"Jump3.png":{"x":1308,"y":1163,"w":224,"h":445},"Jump4.png":{"x":1559,"y":1163,"w":227,"h":447},"Jump5.png":{"x":21,"y":1637,"w":216,"h":479},"Jump6.png":{"x":1096,"y":1163,"w":185,"h":418}},"run":{"Run5.png":{"x":1584,"y":727,"w":229,"h":409},"Run6.png":{"x":21,"y":1163,"w":299,"h":413},"Run7.png":{"x":1223,"y":727,"w":334,"h":407},"Run8.png":{"x":1419,"y":302,"w":286,"h":380},"Run9.png":{"x":347,"y":1163,"w":248,"h":414},"Run10.png":{"x":1732,"y":302,"w":267,"h":398}},"coin":{"Silver_21.png":{"x":21,"y":2819,"w":563,"h":564},"Silver_22.png":{"x":1138,"y":2228,"w":559,"h":564},"Silver_23.png":{"x":607,"y":2228,"w":504,"h":564},"Silver_24.png":{"x":1066,"y":2819,"w":428,"h":565},"Silver_25.png":{"x":929,"y":1637,"w":262,"h":564},"Silver_26.png":{"x":264,"y":1637,"w":108,"h":564},"Silver_27.png":{"x":1218,"y":1637,"w":262,"h":564},"Silver_28.png":{"x":611,"y":2819,"w":428,"h":565},"Silver_29.png":{"x":399,"y":1637,"w":503,"h":564},"Silver_30.png":{"x":21,"y":2228,"w":559,"h":564}}}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Background {
    constructor(canvas) {
        this.velocity = 150;
        this.distance = 0;
        this.lastFrameRepaintTime = 0;
        this.canvas = canvas;
        this.ctx = canvas.ctx;
        this.width = canvas.canvas.width;
        this.height = canvas.canvas.height;
        this.imgs = [];
        this.addLayers ();
    }
    addLayers() {
        for (let i = 0; i < 4; i++) {
            this.imgs[i] = new Image ();
            this.imgs[i].width = this.width;
            if (i === 2) {
                this.imgs[i].height = 275;
            } else if (i === 3) {
                this.imgs[i].height = 120;
            } else {
                this.imgs[i].height = this.height;
            }

            this.imgs[i].src = './assets/img/background/layer' + i + '.png';
        }
    }
    calcOffset(time) {
        const frameGapTime = time - this.lastFrameRepaintTime;
        this.lastFrameRepaintTime = time;
        return this.velocity * (frameGapTime / 1000);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpriteSheet__ = __webpack_require__(0);


class Hero extends __WEBPACK_IMPORTED_MODULE_0__SpriteSheet__["a" /* default */] {
    constructor(name, canvasHeight, isJump, isDie, speed) {
        super (name, speed, 2);
        this.isJump = isJump;
        this.isDie = isDie;
        this.posX = 200;
        this.posY =
            name !== 'jump'
                ? canvasHeight - this.height
                : canvasHeight - this.height - 15;
    }
    crashWith(otherobj) {
        const myleft = this.posX+20;
        const mytop = this.posY - 40;
        const myright = this.posX + this.width - 30;
        const mybottom = this.posY + this.height - 30;
        const otherleft = otherobj.posX + 10;
        const othertop = otherobj.posY + 10;
        const otherright = otherobj.posX + otherobj.width;
        const otherbottom = otherobj.posY + otherobj.height;

        return myright < otherleft ||
            mybottom < othertop ||
            myleft > otherright ||
            mytop > otherbottom
            ? false
            : true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Coin__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(posY, arr) {
    const coins = [];
    const pos = { x: 200, y: posY };

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j]===1) {
                const coin = new __WEBPACK_IMPORTED_MODULE_0__Coin__["a" /* default */] (
                'coin',
                4,
                pos.x + 100 * j,
                pos.y - 100 * (arr.length - i)
            );
            coins.push (coin);
            } 
        }
    }
    return coins;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cactus__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function (posY, arr) {
    const cactuses = [];
    const pos = { x: 200, y: posY };

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j]===2) {
                const cactus = new __WEBPACK_IMPORTED_MODULE_0__Cactus__["a" /* default */] (
                pos.x + 100 * j,
                pos.y - 42,
                4
            );
            cactuses.push (cactus);
            } 
        }
    }
    return cactuses;
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Audio__ = __webpack_require__(1);


// const coinPickSound = new Audio ('./assets/audio/coinPick.wav');

/* harmony default export */ __webpack_exports__["a"] = (function (hero, coins, score) {
    const l = coins.length; 
    for (let i=0; i<l; i++) {
        if (hero.crashWith (coins[i])) {        
            score.add (10);
            coins.splice (i, 1);
            new __WEBPACK_IMPORTED_MODULE_0__Audio__["a" /* default */] ('./assets/audio/coinPick.wav').play ();
            return;
        } 
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LevelHandler__ = __webpack_require__(2);


class Score {
    constructor () { 
        this.score = 0;
        this.div = document.createElement ('header');
        this.levelSpan = document.createElement ('span');
        this.levelSpan.innerText = `Level ${__WEBPACK_IMPORTED_MODULE_0__LevelHandler__["a" /* default */].level}`;
        this.parentSpan = document.createElement ('span');
        this.parentSpan.classList.add ('score');
        this.parentSpan.innerText = 'Score: '
        this.childSpan = document.createElement ('span');
        this.childSpan.innerText = this.score;
        this.parentSpan.appendChild (this.childSpan);
        this.div.appendChild (this.levelSpan);
        this.div.appendChild (this.parentSpan);
        document.body.appendChild (this.div);
    }
    add (num) {
        this.score += num;
        this.childSpan.innerText = this.score;
    }
    restart () {
        this.score = 0;
        this.childSpan.innerText = this.score;
        this.levelSpan.innerText = `Level ${__WEBPACK_IMPORTED_MODULE_0__LevelHandler__["a" /* default */].level}`;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Score;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"1":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1],[1,1,1,1,1,1,1,0,0,0,0,1,0,0,2,0,0,1,0,0,1,1,1,1,0,0,2,0,0,1,0,1,1,1,2,1,1,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,1,1,0,0,2,1,1,1,1,1,0,0,0,1,1,0,1,1,2,1,1,1,1,0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,1,0,0,1,1,1]],"2":[[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1],[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1],[1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0],[0,0,0,0,1,0,0,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,1,1,1,1,2,1,0,1,1,0,0,0,1,1,0,0,0,0,2,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,2,0,0,1,0,0,1,1,1,1,0,0,2,0,0,1,0]]}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LevelHandler__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Audio__ = __webpack_require__(1);




const overlay = document.createElement ('div');
const modal = document.createElement ('section');
const p = document.createElement ('p');
const BtnsSection = document.createElement ('section');
const restartBtn = document.createElement ('a');
const nextLvlBtn = document.createElement ('a');
const backBtn = document.createElement ('a');
const dieSound = new __WEBPACK_IMPORTED_MODULE_2__Audio__["a" /* default */]('./assets/audio/die.wav');
const winSound = new __WEBPACK_IMPORTED_MODULE_2__Audio__["a" /* default */]('./assets/audio/win.wav');

restartBtn.id = 'restart';
nextLvlBtn.id = 'nextLvl';

backBtn.href = 'index.html';
restartBtn.href = '#';
nextLvlBtn.href = '#';

backBtn.innerText = 'back';
restartBtn.innerText = 'restart';
nextLvlBtn.innerText = 'next lvl';

overlay.classList.add ('overlay');
modal.classList.add ('modal');
BtnsSection.classList.add ('btns-section');

restartBtn.addEventListener ('click', (event) => {
    event.preventDefault ();
    buttonPressed (restartBtn);
});
nextLvlBtn.addEventListener ('click', (event) => {
    event.preventDefault ();
    __WEBPACK_IMPORTED_MODULE_1__LevelHandler__["a" /* default */].nextLevel();
    buttonPressed (nextLvlBtn);
});

/* harmony default export */ __webpack_exports__["a"] = (function (type, score) {
    type === 'win' ? winSound.play () : dieSound.play ();

    p.innerText =
        type === 'win'
            ? `you finished with a score of ${score}`
            : `you are a looser, but you got ${score} points`;

    BtnsSection.appendChild (type === 'win' && __WEBPACK_IMPORTED_MODULE_1__LevelHandler__["a" /* default */].isMoreLevels () ? nextLvlBtn : restartBtn);
    BtnsSection.appendChild (backBtn);
    modal.appendChild (p);
    modal.appendChild (BtnsSection);
    overlay.appendChild (modal);
    document.body.appendChild (overlay);
});
function buttonPressed (button) {
    dieSound.stop ();
    winSound.stop ();
    BtnsSection.removeChild (backBtn);
    BtnsSection.removeChild (button);
    modal.removeChild (p);
    modal.removeChild (BtnsSection);
    overlay.removeChild(modal);
    document.body.removeChild (overlay);
    Object(__WEBPACK_IMPORTED_MODULE_0__index__["default"]) ();
}

/***/ })
/******/ ]);