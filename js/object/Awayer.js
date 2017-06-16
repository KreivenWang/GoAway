class Awayer extends Dot {
    constructor() {
        super();
        this.radius = 10;
        this.color = '#00ffff';
    }

    getCanvasContext() {
        return getAwayerContext();
    }

    born() {
        super.born();
        this.startX = cvsWidth * 0.5;
        this.startY = cvsHeight * 0.5;
        this.x = this.startX;
        this.y = this.startY;
    }

    move() {
        let ratio = 0.9;
        let lerpX = lerpDistance(mX, this.x, ratio);
        let lerpY = lerpDistance(mY, this.y, ratio);
        if (isNaN(lerpX) || isNaN(lerpY)) return;
        this.x = lerpX;
        this.y = lerpY;
    }
}