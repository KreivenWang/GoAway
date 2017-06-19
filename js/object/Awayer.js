class Awayer extends Dot {
    constructor() {
        super();
        this.radius = 12;
        this.color = curTheme.AWAYER;
        this.tail = new Tail(this.radius);
        this.eyeTimer = 0; //时间计数
        this.eyeInterval = 1000; //眨眼间隔
        this.eyeBlinkCount = 0;
        this.angle = 0;
    }

    getCanvasContext() {
        return getAwayerContext();
    }

    born() {
        super.born();
        this.x = cvsWidth * 0.5;
        this.y = cvsHeight * 0.5;
        this.tail.born();
        this.tail.setColor(curTheme.AWAYER_TAIL);
    }

    draw() {
        if (!this.isAlive) return;
        let ctx = this.getCanvasContext();
        let colorStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        //发光外圆
        ctx.shadowBlur = 5;
        ctx.shadowColor = "white";
        ctx.strokeStyle = colorStyle;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();



        this.eyeTimer += deltaTime;
        if (this.eyeTimer > this.eyeInterval) {
            this.eyeTimer %= this.eyeInterval; //计数回归初始状态

            this.eyeBlinkCount = (this.eyeBlinkCount + 1) % 2; // [0, n-1] (此处n=2)之间循环, 此处也可用true false代替
            if (this.eyeBlinkCount == 0) { //指定睁眼持续时间
                this.eyeInterval = randomInt(2000, 3500);
            } else {//指定闭眼持续时间
                this.eyeInterval = 200;
            }
        }

        if (this.eyeBlinkCount == 0) {
            //睁开的眼睛
            ctx.fillStyle = colorStyle;
            ctx.beginPath();
            ctx.arc(4, 0, 3, 0, Math.PI * 2, true);
            ctx.fill();
        }

        if (this.eyeBlinkCount == 1) {
            //闭上的眼睛
            ctx.fillStyle = colorStyle;
            ctx.beginPath();
            ctx.rect(4 - (6 / 2), 0 - (2 / 2), 6, 2);
            ctx.fill();
        }

        ctx.restore();
    }

    move() {
        //lerp x y
        let lerpX = lerpDistance(mX, this.x, 0.95);
        let lerpY = lerpDistance(mY, this.y, 0.95);

        //lerp angle
        let deltaY = mY - this.y;
        let deltaX = mX - this.x;

        if (isNaN(lerpX) || isNaN(lerpY) || isNaN(deltaY) || isNaN(deltaX)) return;
        this.x = lerpX;
        this.y = lerpY;
        let beta = Math.atan2(deltaY, deltaX);//-PI, PI
        this.angle = lerpAngle(beta, this.angle, 0.6);

        this.tail.draw(this.x, this.y);
    }

    die() {
        super.die();
        this.tail.die();
    }
}