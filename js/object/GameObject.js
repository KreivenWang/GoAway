class GameObject {
    constructor(x, y, w, h) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 0;
        this.h = h || 0;
    }

    getCenter() {
        return {
            x: (this.x + this.w) * 0.5,
            y: (this.y + this.h) * 0.5
        };
    }
}