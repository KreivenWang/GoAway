class Bullet extends Dot {
    constructor() {
        super();
        this.angle = 1; //角度
        this.orientation = Orientation.BOTTOM; //朝向
        this.tail = new Tail();
    }

    getCanvasContext() {
        return getBulletContext();
    }

    born() {
        super.born();
        this.orientation = getRandomOrientation();
        this.speed = Rules.BULLET_INIT_SPEED + randomInt(10, 20) / 100 - 0.1;
        this.color = curTheme.BULLET;

        switch (this.orientation) {
            case Orientation.TOP:
                this.x = randomInt(1, cvsWidth);
                this.y = 0;
                this.angle = randomInt(225, 315);
                break;
            case Orientation.BOTTOM:
                this.x = randomInt(1, cvsWidth);
                this.y = cvsHeight;
                this.angle = randomInt(45, 135);
                break;
            case Orientation.LEFT:
                this.x = 0;
                this.y = randomInt(1, cvsHeight);
                this.angle = randomInt(-45, 45);
                break;
            case Orientation.RIGHT:
                this.x = cvsWidth;
                this.y = randomInt(1, cvsWidth);
                this.angle = randomInt(135, 225);
                break;
        }
        this.tail.born();
        this.tail.setColor(curTheme.BULLET_TAIL);
    }

    move() {
        let deltaDistance = this.speed * deltaTime;
        switch (this.orientation) {
            case Orientation.TOP:
                this.x += deltaDistance / angleToSlope(this.angle);
                this.y += deltaDistance;
                break;
            case Orientation.BOTTOM:
                this.x += deltaDistance / angleToSlope(this.angle);
                this.y -= deltaDistance;
                break;
            case Orientation.LEFT:
                this.x += deltaDistance;
                this.y += deltaDistance * angleToSlope(this.angle);
                break;
            case Orientation.RIGHT:
                this.x -= deltaDistance;
                this.y += deltaDistance * angleToSlope(this.angle);
                break;
        }

        this.tail.draw(this.x, this.y);

        if (this.outOfSight()) {
            this.die();
        }
    }

    outOfSight() {
        let range = 5;
        return this.x > cvsWidth + range ||
            this.y > cvsHeight + range ||
            this.x < 0 - range ||
            this.y < 0 - range;
    }

    die() {
        super.die();
        this.tail.die();
    }
}