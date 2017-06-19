class Dot extends GameObject {
    constructor() {
        super();
        this.isAlive = true; //是否存活
        this.radius = 6; //半径
        this.speed = 0.1; //速度
        this.color = '#ff0000';//颜色
        this.opacity = 1.0;
    }

    getCanvasContext() {
        return getBulletContext();
    }

    born() {
        this.isAlive = true;
        let dismeter = this.radius * 2;
        this.w = dismeter;
        this.h = dismeter;
    }

    die() {
        this.isAlive = false;
    }

    draw() {
        if (!this.isAlive) return;
        let ctx = this.getCanvasContext();
        ctx.save();

        //创建径向渐变
        // let center = this.getCenter();
        // let grd = ctx.createRadialGradient(center.x, center.y, 1, center.x, center.y, this.radius);
        // grd.addColorStop(0, this.color);
        // grd.addColorStop(1, 'transparent');
        // ctx.fillStyle = grd;
        // ctx.fillRect(this.x, this.y, this.getSize(), this.getSize());

        ctx.fillStyle = `rgba(${this.color.toRGB()}, ${this.opacity})`;
        //绘制实心的圆形 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();

        ctx.fill();
        ctx.restore();
    }

    move() {
    }

    alterSpeed(value) {
        this.speed += value;
    }
}