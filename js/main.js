document.body.onload = game;

let cvs0;
let cvs1;
let cvs2;

let ctx0;
let ctx1;
let ctx2;

let cvsWidth;
let cvsHeight;

let lastTime;
let deltaTime;

let mX;
let mY;

let gameManager;

function game() {
    console.log('onload');
    init();
    gameloop();
}

function init() {
    //获得canvas context size
    cvs0 = document.getElementById('canvas0');//bullets, away, ui
    cvs1 = document.getElementById('canvas1');//background
    cvs2 = document.getElementById('canvas2');
    ctx0 = cvs0.getContext('2d');
    ctx1 = cvs1.getContext('2d');
    ctx2 = cvs2.getContext('2d');
    ctx1.isLoaded = false;
    ctx1.onload = () => { ctx1.isLoaded = true; }
    cvsWidth = cvs1.clientWidth;
    cvsHeight = cvs1.clientHeight;

    cvs2.addEventListener('mousemove', onMouseMove, false);

    //设置时间
    lastTime = Date.now();
    deltaTime = 0;

    //设置背景
    drawBackground();

    //初始化游戏管理器
    gameManager = new GameManager();
    gameManager.reset();
}

function gameloop() {
    window.requestAniFrame(gameloop);//setInterval, setTimeout
    calcTime();
    clearCanvas();
    bulletPool.draw();
    awayer.move();
    awayer.draw();
    detectCollision();
    hud.draw();
}

function calcTime() {
    let now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    //网页标签切换时, 会导致2帧之间deltaTime过大
    if (deltaTime > 40) deltaTime = 40;
}

function clearCanvas() {
    //背景不清空
    ctx1.clearRect(0, 0, cvsWidth, cvsHeight);
    ctx2.clearRect(0, 0, cvsWidth, cvsHeight);
}

function getHudContext() {
    return ctx2;
}

function getAwayerContext() {
    return ctx1;
}

function getBulletContext() {
    return ctx1;
}

function getBackgroundContext() {
    return ctx0;
}

function onMouseMove(e) {
    if (e.offSetX || e.layerX) {
        mX = e.offSetX == undefined ? e.layerX : e.offSetX;
        mY = e.offSetY == undefined ? e.layerY : e.offSetY;
    }
}