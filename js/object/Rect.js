class Rect {
    constructor() {
        this.x = 0; //x坐标
        this.y = 0; //y坐标
        this.width = 0; //宽
        this.height = 0; //高
    }

    setBasic(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    getCanvasContext() {
        return null;
    }
}