class Lifes {
    constructor(ctx, lifesNum) {
        this.ctx = ctx;
        this.lifesNum = lifesNum;
    }

    draw() {
        this.ctx.fillStyle = "white";
        this.ctx.font = "13px sans-serif";
        this.ctx.fillText("VIDAS: " + this.lifesNum, 5, 590);
    }

    takeAlife() {

        this.lifesNum--
    }
}