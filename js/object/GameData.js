class GameData {
    constructor() {
        this.reset();
    }

    reset() {
        this.isGameRunning = true; //游戏是否正在运行
        this.wave = 1; //当前波数
        this.bulletSpeedTotalIncrement = 0; //当前子弹速度的总增量
    }
}