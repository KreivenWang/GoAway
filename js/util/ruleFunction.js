// 获取一个随机朝向
function getRandomOrientation() {
    let rd = Math.random();//[0,1);
    if (isTop(rd)) {
        return Orientation.TOP;
    } else 
    if (isBottom(rd)) {
        return Orientation.BOTTOM;
    } else if (isLeft(rd)) {
        return Orientation.LEFT;
    } else {
        return Orientation.RIGHT;
    }
}

function isTop(rdNum) {
    return rdNum >= 0 && rdNum < 0.25;
}

function isBottom(rdNum) {
    return rdNum >= 0.25 && rdNum < 0.5;
}

function isLeft(rdNum) {
    return rdNum >= 0.5 && rdNum < 0.75;
}

function isRight(rdNum) {
    return rdNum >= 0.75 && rdNum < 1;
}