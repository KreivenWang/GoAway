class Dot extends Rect {
    constructor() {
        super();
        this.isAlive = true; //是否存活
        this.startX = 0; //起始x坐标
        this.startY = 0; //起始y坐标
        this.radius = 5; //半径
        this.speed = 0.1; //速度
        this.color = '#ff0000';//颜色
    }

    getSize() {
        return this.radius * 2;
    }

    born() {
        this.isAlive = true;
        let size = this.getSize();
        this.width = size;
        this.height = size;
    }

    die() {
        this.isAlive = false;
    }

    draw() {
        if (!this.isAlive) return;
        let ctx = this.getCanvasContext();
        ctx.save();
        ctx.beginPath();
        //绘制实心的圆形 
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true); 
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        // console.log('drawbullet: x:' + this.startX + ' y:' + this.startY + ' r:' + this.radius);
    }

    move() {
    }

    alterSpeed(value) {
        this.speed += value;
    }
}