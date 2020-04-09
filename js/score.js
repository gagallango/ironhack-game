class Score {
    constructor(ctx) {
        this.ctx = ctx
        this.mojitosNum = 0
        this.mojitosLimits = 4

    }
    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.font = "13px sans-serif";
        this.ctx.fillText("EBRIEDAD: " + this.mojitosNum + ' / ' + this.mojitosLimits, 5, 610);
    }

    masMojito() {
        this.mojitosNum++
    }
}