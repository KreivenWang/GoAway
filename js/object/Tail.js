class Tail {
    constructor(length) {
        this.length = length || 5; //长度, 小圆个数
        this.isAlive = true;

        this.dotList = [];
        for (var i = 0; i < this.length; i++) {
            let dot = new Dot();
            this.dotList.push(dot);
        }
    }

    born() {
        this.isAlive = true;
    }

    draw(x, y) {
        if (!this.isAlive) return;
        for (var i = this.length - 1; i >= 0; i--) {
            let cur = this.dotList[i];
            if (i == 0) {
                cur.x = x;
                cur.y = y;
            } else {
                let prev = this.dotList[i - 1];
                cur.x = prev.x;
                cur.y = prev.y;
            }
            cur.radius = (this.length - i);
            cur.opacity = cur.radius / this.length;
        }
        this.dotList.forEach(function (dot) {
            dot.draw();
        }, this);
    }

    die() {
        this.isAlive = false;
        this.dotList.forEach(function (dot) {
            dot.x = 0;
            dot.y = 0;
            dot.radius = 0;
        }, this);
    }

    setColor(color) {
        this.dotList.forEach(function (dot) {
            dot.color = color;
        }, this);
    }
}