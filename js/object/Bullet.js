class Bullet extends Dot {
    constructor() {
        super();
        this.angle = 1; //角度
        this.orientation = Orientation.BOTTOM; //朝向
    }

    getCanvasContext() {
        return getBulletContext();
    }

    born() {
        super.born();
        this.orientation = getRandomOrientation();
        if (this.orientation == Orientation.TOP)
            this.orientation = Orientation.BOTTOM;
        this.speed = Rules.BULLET_INIT_SPEED + randomInt(10, 20) / 100 - 0.1;
        this.color = '#ff6600';

        switch (this.orientation) {
            // case Orientation.TOP:
            //     this.startX = Math.random() * cvsWidth;
            //     this.startY = 0;
            //     break;
            case Orientation.BOTTOM:
                this.startX = randomInt(1, cvsWidth);
                this.startY = cvsHeight;
                this.angle = randomInt(45, 135);
                // this.color = '#ff0000';
                break;
            case Orientation.LEFT:
                this.startX = 0;
                this.startY = randomInt(1, cvsHeight);
                this.angle = randomInt(-45, 45);
                // this.color = '#ffff00';
                break;
            case Orientation.RIGHT:
                this.startX = cvsWidth;
                this.startY = randomInt(1, cvsWidth);
                this.angle = randomInt(135, 225);
                // this.color = '#00ff00';
                break;
        }
        this.x = this.startX;
        this.y = this.startY;
    }

    move() {
        let deltaDistance = this.speed * deltaTime;
        switch (this.orientation) {
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
}