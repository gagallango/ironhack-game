class Square {

    constructor(ctx, posX, posY, width, height, canvasSize) {
        this.ctx = ctx
        this.square = undefined
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.vel = 20
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.square = new Image()
        this.square.src = './img/GAMEArtboard 18@100x.png'
    }

    draw() {
        this.ctx.drawImage(this.square, this.posX, this.posY, this.width, this.height)
    }

    move(dir) {
        console.log(dir)
        dir === 'down' && this.posY < this.canvasSize.height - this.height ? this.posY += this.vel : null
        dir === 'up' && this.posY > 0 && this.vel !== 0 ? this.posY -= this.vel : null

        dir === 'right' && this.posX > 0 && this.vel !== 0 ? this.posX -= this.vel : null
        dir === 'left' && this.posX < this.canvasSize.width - this.width ? this.posX += this.vel : null
    }
}