class Background {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height

        this.backgroundImage = new Image()
        this.backgroundImage2 = new Image()
        this.backgroundImage.src = './img/buenaaaa.png'
        this.backgroundImage2.src = './img/fondodos.png'

        this.vel = 20

    }
    draw() {
        this.ctx.drawImage(this.backgroundImage, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.backgroundImage, this.posX, this.posY - this.height, this.width, this.height)

    }

    move() {
        this.posY += 618;

        // if (this.posY <= this.height) {
        //     this.posY = 0;
        // }
    }
}