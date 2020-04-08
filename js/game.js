const game = {
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: {
        height: 612,
        width: 351
    },
    square: undefined,
    mojito: [],
    counter: 0,
    FPS: 30,
    obstacle: [],
    interval: 0,
    background: undefined,

    init() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")
        this.eventListener()
        this.generateMojito()

        this.square = new Square(this.ctx, this.canvasSize.width / 2, this.canvasSize.height - 40, 50, 60, this.canvasSize)
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height, './img/buenaaaa.png')
        // this.mojito = new Mojitos(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 + 40, 10, 10, this.canvasSize)
        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawAll()

            this.counter++
            if (this.counter % 300 === 0) {
                this.generateObstacles()
                this.clearObstacles()
            }

            // this.obstacle.forEach((elm) => {
            //     elm.drawObstacle()
            //     elm.move()
            //     elm.isCollision(this.square, elm) ? this.gameOver() : null
            // })

            this.isCollision(this.mojito)
        }, 100)

    },
    drawAll() {

        this.background.draw()

        // if (this.square.posY - 10 < this.canvasSize.height / 2) {
        //     this.square.posY = this.canvasSize.height / 2 ;
        //     this.background.move()
        // }

        this.mojito.forEach((elm) => {
            elm.draw()

        })
        this.square.draw()
    },
    eventListener() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.square.move('right') : null
            e.keyCode === 39 ? this.square.move('left') : null
            e.keyCode === 40 ? this.square.move('down') : null
            // e.keyCode === 38 ? this.square.move('up') : null
            if (this.square.posY - 10 < this.canvasSize.height / 2 && e.keyCode === 38) {
                this.background.move()
            } else if (e.keyCode === 38) {
                this.square.move('up')
            }
        }

    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },
    generateObstacles() {
        this.obstacle.push(new Obstacles(this.ctx, this.canvasSize.width / 2 + 200, this.canvasSize.height / 2 + 100, 20, 20, this.canvasSize))
    },
    gameOver() {
        document.location.reload();
        window.clearInterval(this.interval)
    },
    clearObstacles() {
        this.obstacle = this.obstacle.filter(obs => obs.posX >= 0);
    },
    generateMojito() {
        this.mojito.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 + 40, 30, 40, this.canvasSize))
    },
    isCollision(array) {
        array.forEach(elm => {
            if (
                this.square.posX < elm.posX + elm.width &&
                this.square.posX + this.square.width > elm.posX &&
                this.square.posY < elm.posY + elm.height &&
                this.square.posY + this.square.height > elm.posY
            ) {
                let index = array.indexOf(elm);
                array.splice(index, 1);
            }
        })
    }


}

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
    }
    draw() {

        this.square = new Image()
        this.square.src = './img/GAMEArtboard 18@100x.png'
        this.square.onload = () => this.ctx.drawImage(this.square, this.posX, this.posY, this.width, this.height)

        // this.ctx.fillStyle = 'black'
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    move(dir) {

        dir === 'down' && this.posY < this.canvasSize.height - this.height ? this.posY += this.vel : null
        dir === 'up' && this.posY > 0 ? this.posY -= this.vel : null

        dir === 'right' && this.posX > 0 ? this.posX -= this.vel : null
        dir === 'left' && this.posX < this.canvasSize.width - this.width ? this.posX += this.vel : null
    }
}


class Obstacles {
    constructor(ctx, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        // this.posX = Math.floor((Math.random() * 40) + 80)
        this.posX = 0
        this.posY = posY
        this.obsW = Math.floor((Math.random() * 40) + 80)
        this.obsH = obsH
        this.canvasSize = {
            width: canvasSize.width,
            height: canvasSize.height
        }
        this.obs = undefined
        this.speed = 1
        this.image = new Image

    }

    drawObstacle() {

        this.obs = new Image()
        this.obs.src = './img/GAMEArtboard 16@100x.png'
        this.obs.onload = () => this.obs.drawImage(this.obs, this.posX, this.posY, this.width, this.height)
        // this.ctx.fillStyle = "white"
        // this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH)
    }
    move() {
        this.posX += this.speed
        // this.posX -= this.speed
    }

    isCollision(square, obstacle) {
        // console.log(square)
        // console.log(square.posX)
        // console.log("hola")
        // console.log(obstacle)
        // console.log(obstacle.posX)
        // console.log(obstacle.posY)
        return (square.posX < obstacle.posX + obstacle.obsW &&
            square.posX + square.width > obstacle.posX &&
            square.posY < obstacle.posY + obstacle.obsH &&
            square.posY + square.height > obstacle.posY)

    }
}




class Mojitos {

    constructor(ctx, posX, posY, width, height, canvasSize) {
        this.ctx = ctx
        this.mojito = undefined
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

        this.mojito = new Image()
        this.mojito.src = './img/GAMEArtboard 10@100x.png'
        this.mojito.onload = () => this.ctx.drawImage(this.mojito, this.posX, this.posY, this.width, this.height)

        // this.ctx.fillStyle = 'orange'
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }
    // isCollisionMojito(item1, item2) {
    //     return (
    //         item1.posX < item2.posX + item2.width &&
    //         item1.posX + item1.width > item2.posX &&
    //         item1.posY < item2.posY + item2.height &&
    //         item1.posY + item1.height > item2.posY
    //     )
    // }


}



