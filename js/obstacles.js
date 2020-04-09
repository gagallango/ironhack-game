class Obstacles {
    constructor(ctx, posX, posY, width, height, canvasSize, image) {
        this.ctx = ctx
        this.posX0 = posX
        this.posY0 = posY
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.obs = undefined
        this.speed = 5
        this.obs = new Image()
        this.obs.src = image
    }

    draw() {
        this.ctx.drawImage(this.obs, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        if (this.posX0 <= 0) {
            this.posX += this.speed
        } else {
            this.posX -= this.speed
        }
    }

}



// BEBIDAS TO CATCH

class Mojitos {

    constructor(ctx, posX, posY, width, height, canvasSize, image) {
        this.ctx = ctx
        this.mojito = new Image()
        this.mojito.src = image
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }
    draw() {

        this.ctx.drawImage(this.mojito, this.posX, this.posY, this.width, this.height)

    }
}


// COSAS TO ESQUIVAR

class Cosas {
    constructor(ctx, posX, posY, width, height, canvasSize, image) {
        this.ctx = ctx
        this.edificio = undefined
        this.edificio = new Image()
        this.edificio.src = image
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
    }
    draw() {
        this.ctx.drawImage(this.edificio, this.posX, this.posY, this.width, this.height)

    }


}

