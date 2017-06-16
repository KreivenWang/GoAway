let bgPic;
let starSmallPic;
let starBigPic;

function drawBackground() {
    bgPic = new Image();
    starSmallPic = new Image();
    starBigPic = new Image();

    //异步加载图片，完成后执行回调方法onload来绘制
    bgPic.src = './src/bg.jpg';
    starSmallPic.src = './src/starSmall.png';
    starBigPic.src = './src/starBig.png';


    // bgPic.onload = function () {
    //     let ctx = getBackgroundContext();
    //     ctx.drawImage(bgPic, 0, 0, cvsWidth, cvsHeight);
    // };

    //放射渐变背景画法
    // var grd = ctx2.createRadialGradient(cvsWidth/2, cvsHeight, 50, cvsWidth/2, cvsHeight/2, cvsWidth);
    // grd.addColorStop(1, "#283569");
    // grd.addColorStop(0, "#1263a2");
    // ctx2.fillStyle = grd;
    // ctx2.fillRect(0, 0, cvsWidth, cvsHeight);
}

function updateBackground() {
    let ctx = getBackgroundContext();
    ctx.drawImage(bgPic, 0, 0, cvsWidth, cvsHeight);
    ctx.drawImage(starSmallPic, mX*0.01, mY*0.01, cvsWidth, cvsHeight);
    ctx.drawImage(starBigPic,  mX*0.05, mY*0.05, cvsWidth, cvsHeight);
}