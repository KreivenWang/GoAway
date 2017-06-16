//BulletPool 单例
let instance_BulletPool = null;
class BulletPool {
    constructor() {
        this.bullets = [];
        if (!instance_BulletPool) instance_BulletPool = this;
        return instance_BulletPool;
    }

    init() {
        this.clear();
        for (var i = 0; i < Rules.BULLET_INIT_NUM; i++) {
            this.addBullet();
        }
    }

    clear() {
        this.bullets.forEach(function (bullet) {
            bullet.die();
        }, this);
        this.bullets = [];
    }

    addBullet() {
        let newBullet = new Bullet();
        newBullet.born();
        this.bullets.push(newBullet);
    }

    draw() {
        this.bullets.forEach(function (bullet) {
            if (bullet.isAlive) {
                bullet.move();
                bullet.draw();
            } else {
                bullet.born();
                bullet.alterSpeed(gameData.bulletSpeedTotalIncrement);
            }
        }, this);
    }

    speedUp() {
        this.bullets.forEach(function (bullet) {
            bullet.alterSpeed(Rules.BULLET_SPEED_INCREMENT);
        }, this);
    }
}