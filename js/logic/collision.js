function detectCollision() {
    bulletPool.bullets.forEach(function (bullet) {
        if (bullet.isAlive) {
            if (isCollided(bullet, awayer)) {
                gameManager.gameOver();
            }
        }
    });
}