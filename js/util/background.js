let bgPic;
let stars;

function resetBackground() {
    bgPic = new Image();
    stars = [];

    //异步加载图片，完成后执行回调方法onload来绘制
    bgPic.src = './src/bg.jpg';

    for (var i = 0; i < 40; i++) {
        let star = new Image();
        star.src = './src/star' + randomInt(1, 3) + '.png';
        star.posX = randomInt(0, cvsWidth);
        star.posY = randomInt(0, cvsHeight);
        star.deltaViewRatio = randomInt(1, 6) * 0.01;
        star.size = randomInt(16, 48);
        stars.push(star);
    }

    // bgPic.onload = function () {
    //     let ctx = getBackgroundContext();
    //     ctx.drawImage(bgPic, 0, 0, cvsWidth, cvsHeight);
    // };

    //放射渐变背景画法
    // var grd = ctx2.createRadialGradient(cvsWidth/2, cvsHeight, 50, cvsWidth/2, cvsHeight/2, cvsWidth);
    // grd.addColorStop(1, "#283569");
    // grd.addColorStop(0, "#1263a2");
    // ctx2.fillStyle = grd;
    // ctx2.fillGameObject(0, 0, cvsWidth, cvsHeight);
}

function updateBackground() {
    let ctx = getBackgroundContext();
    ctx.drawImage(bgPic, 0, 0, cvsWidth, cvsHeight);
    stars.forEach(function (star) {
        ctx.drawImage(star,
            star.posX - mX * star.deltaViewRatio,
            star.posY - mY * star.deltaViewRatio,
            star.size, star.size);
    });
}