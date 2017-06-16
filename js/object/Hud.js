class Hud {
    constructor() {
        this.ctx = getHudContext();
    }

    init() {

    }

    draw() {
        if (gameData.isGameRunning) {
            this.drawWave();
        } else {
            this.drawGameOver();
        }
    }

    drawWave() {
        this.ctx.save();
        let font = '28px Arial';
        if (this.ctx.font != font) {

            this.ctx.font = font;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#ffffff';
            this.ctx.fillStyle = '#ffffff';
        }
        this.ctx.fillText('Wave ' + gameData.wave, 50, 50);
        this.ctx.restore();
    }

    drawGameOver() {
        this.ctx.save();
        let font = '50px Arial';
        if (this.ctx.font != font) {
            this.ctx.font = font;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#ffffff';
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.textAlign = 'center';
        }
        this.ctx.strokeText('Game Over', cvsWidth * 0.5, cvsHeight * 0.5);
        this.ctx.strokeText(' Best : Wave ' + gameData.wave, cvsWidth * 0.5, cvsHeight * 0.5 - 50);
        this.ctx.restore();
    }
}