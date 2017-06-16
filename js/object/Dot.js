class Dot extends Rect {
    constructor() {
        super();
        this.isAlive = true; //是否存活
        this.startX = 0; //起始x坐标
        this.startY = 0; //起始y坐标
        this.radius = 6; //半径
        this.speed = 0.1; //速度
        this.color = '#ff0000';//颜色
    }

    getSize() {
        return this.radius * 2;
    }

    getCenter() {
        return {
            x: this.x + this.radius,
            y: this.y + this.radius
        };
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
        
        //创建径向渐变
        // let center = this.getCenter();
        // let grd = ctx.createRadialGradient(center.x, center.y, 1, center.x, center.y, this.radius);
        // grd.addColorStop(0, this.color);
        // grd.addColorStop(1, 'transparent');
        // ctx.fillStyle = grd;
        // ctx.fillRect(this.x, this.y, this.getSize(), this.getSize());

        //绘制实心的圆形 
        ctx.beginPath();
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