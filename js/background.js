class Background {
    constructor(ctx, posX, posY, width, height, image) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height

        this.backgroundImage = new Image()
        this.backgroundImage.src = image

        this.vel = 20

    }
    draw() {
        this.ctx.drawImage(this.backgroundImage, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.backgroundImage, this.posX, this.posY - this.height, this.width, this.height);

        // this.ctx.fillStyle = 'pink'
        // this.ctx.fillRect(0, 0, 300, 500)
    }
    move() {
        this.posY += this.vel;

        if (this.posY >= this.height) {
            this.posY = 0;
        }
    }
}