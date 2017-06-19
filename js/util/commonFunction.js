window.requestAniFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();

function randomColor() {
    var col = [0, 1, 2];
    col[0] = Math.random() * 100 + 155;
    col[0] = col[0].toFixed();
    col[1] = Math.random() * 100 + 155;
    col[1] = col[1].toFixed();
    col[2] = Math.random() * 100 + 155;
    col[2] = col[2].toFixed();
    var num = Math.floor(Math.random() * 3);
    col[num] = 0;
    return "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",";
}




function inOboundary(arrX, arrY, l, r, t, b) { //在l r t b范围内的检测
    return arrX > l && arrX < r && arrY > t && arrY < b;
}

function rgbColor(r, g, b) {
    r = Math.round(r * 256);
    g = Math.round(g * 256);
    b = Math.round(b * 256);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}

function rgbNum(r, g, b) {
    r = Math.round(r * 256);
    g = Math.round(g * 256);
    b = Math.round(b * 256);
    return "rgba(" + r + "," + g + "," + b;
}

function rnd(m) {
    var n = m || 1;
    return Math.random() * n;
}

function rateRandom(m, n) {
    var sum = 0;
    for (var i = 1; i < (n - m); i++) {
        sum += i;

    }

    var ran = Math.random() * sum;

    for (var i = 1; i < (n - m); i++) {
        ran -= i;
        if (ran < 0) {
            return i - 1 + m;
        }
    }
}

function distance(x1, y1, x2, y2, l) {
    var x = Math.abs(x1 - x2);
    var y = Math.abs(y1 - y2);
    if (x < l && y < l) {
        return true;
    }
    return false;
}

function AABBbox(object1, w1, h1, object2, w2, h2, overlap) {
    A1 = object1.x + overlap;
    B1 = object1.x + w1 - overlap;
    C1 = object1.y + overlap;
    D1 = object1.y + h1 - overlap;

    A2 = object2.x + overlap;
    B2 = object2.x + w2 - overlap;
    C2 = object2.y + overlap;
    D2 = object2.y + h2 - overlap;

    if (A1 > B2 || B1 < A2 || C1 > D2 || D1 < C2) return false;
    else return true;
}


function dis2(x, y, x0, y0) {
    var dx = x - x0;
    var dy = y - y0;
    return dx * dx + dy * dy;
}

function rndi2(m, n) {
    var a = Math.random() * (n - m) + m;
    return Math.floor(a);
}


// 根据朝向获取一个随机角度
function getRandomAngle(orientation) {

}

// 角度转斜率
function angleToSlope(angleNum) {
    return Math.tan(numToAngle(angleNum));
}

// 数字转角度
function numToAngle(angleNum) {
    return angleNum * 2 * Math.PI / 360;
}

/*生成指定范围随机整数*/
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//使当前值(cur)以一定的速度(ratio(0,1))趋向于目标值(aim)
function lerpDistance(aim, cur, ratio) {
    var delta = cur - aim;
    return aim + delta * ratio;
}

//使当前角度(b)以一定的速度(ratio(0,1))趋向于目标值角度(a)
function lerpAngle(a, b, ratio) {
    var d = b - a;
    if (d > Math.PI) d = d - 2 * Math.PI;
    if (d < -Math.PI) d = d + 2 * Math.PI;
    return a + d * ratio;
}

//计算2个矩形是否发生碰撞
function isCollided(rect1, rect2) {
    let maxX, maxY;
    maxX = Math.max(rect1.x, rect2.x);// rect1.x <= rect2.x ? rect2.x : rect1.x;  
    maxY = Math.max(rect1.y, rect2.y); //rect1.y <= rect2.y ? rect2.y : rect1.y;  

    // 判断点是否都在两个对象中  
    return maxX >= rect1.x &&
        maxX <= rect1.x + rect1.w &&
        maxY >= rect1.y &&
        maxY <= rect1.y + rect1.h &&
        maxX >= rect2.x &&
        maxX <= rect2.x + rect2.w &&
        maxY >= rect2.y &&
        maxY <= rect2.y + rect2.h;

    // return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}

//16进制颜色转RGB, 如: #ff0000 => 255,0,0
String.prototype.toRGB = function () {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/; //十六进制颜色值的正则表达式  
    var sColor = this.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值  
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return sColorChange.join(",");
    } else {
        return sColor;
    }
};  