let bulletPool;
let awayer;
let gameData;
let hud;

class GameManager {
    constructor() {
        this.waveTrigger = null;//下一波的触发器

        //创建和初始化游戏数据
        gameData = new GameData();
        //创建子弹池
        bulletPool = new BulletPool();
        //创建玩家
        awayer = new Awayer();
        //创建hud
        hud = new Hud();
    }

    reset() {
        gameData.reset();//重置游戏数据
        bulletPool.init();//初始化子弹池
        awayer.born();//玩家出生
        hud.init();//初始化hud
        this.waveTrigger = setInterval(() => {
            this.nextWave();
        }, 5000);
        this.showRestartBtn(false);
        gameData.isGameRunning = true;
    }

    nextWave() {
        if (!gameData.isGameRunning) return;
        gameData.wave += 1;

        //每过5波增加子弹速度
        if (gameData.wave % 5 == 0) {
            gameData.bulletSpeedTotalIncrement += Rules.BULLET_SPEED_INCREMENT;
        }

        //每过1波增加1子弹数
        bulletPool.addBullet();
        console.log(bulletPool.bullets.length);
    }

    gameOver() {
        if (!gameData.isGameRunning) return;
        awayer.die();
        gameData.isGameRunning = false;
        clearInterval(this.waveTrigger);
        this.showRestartBtn(true);
    }

    showRestartBtn(isShow) {
        let cls = 'hideBtn';
        if (isShow) {
            removeClass(restartBtn, cls);
        } else {
            if (!hasClass(restartBtn, cls))
                addClass(restartBtn, cls);
        }
    }
}