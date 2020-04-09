const game = {
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: {
        height: 618,
        width: 351
    },
    square: undefined,
    mojito: [],
    cerveza: [],
    counter: 0,
    FPS: 30,
    obstacle: [],
    interval: 0,
    background: undefined,
    background2: undefined,
    obstacle2: [],
    obstacle3: [],
    obstacle4: [],
    obstacle5: [],
    obstacle6: [],
    edificio: [],
    obstacle7: [],
    market: [],
    farola: [],
    beer: [],
    cerveza: [],


    init() {
        this.canvas = document.getElementById("myCanvas")
        this.ctx = this.canvas.getContext("2d")
        this.eventListener()
        this.generateMojito()
        this.generateEdifico()
        this.lifes = new Lifes(this.ctx, 3)
        this.score = new Score(this.ctx)
        this.square = new Square(this.ctx, this.canvasSize.width / 2, this.canvasSize.height - 40, 50, 60, this.canvasSize)
        this.background = new Background(this.ctx, 0, 0, this.canvasSize.width, this.canvasSize.height)
        this.interval = setInterval(() => {
            this.clearScreen()
            this.drawAll()

            this.counter++
            if (this.counter % 60 === 0) {
                this.generateObstacles()
                // this.clearObstacles()

            }


            this.isCollisionMojito(this.mojito)
            this.isCollisionMojito(this.beer)
            this.isCollisionMojito(this.cerveza)


            this.isObstacle2Collision(this.obstacle2)
            this.isObstacle2Collision(this.obstacle)
            this.isObstacle2Collision(this.obstacle7)
            this.isObstacle2Collision(this.obstacle3)
            this.isObstacle2Collision(this.obstacle4)
            this.isObstacle2Collision(this.obstacle5)
            this.isObstacle2Collision(this.obstacle6)

            this.isObstacleCollision(this.farola)
            this.isObstacleCollision(this.edificio)
            this.isObstacleCollision(this.market)

            if (this.lifes.lifesNum <= 0) {
                this.gameOver()
            }

        }, 60)

    },

    drawAll() {
        this.background.draw()
        this.mojito.forEach(moj => moj.draw())
        this.market.forEach(mark => mark.draw())
        this.edificio.forEach(edif => edif.draw())
        this.beer.forEach(bee => bee.draw())

        this.cerveza.forEach(cer => cer.draw())


        this.obstacle7.forEach(obs => obs.draw())
        this.obstacle3.forEach(obs => obs.draw())
        this.obstacle4.forEach(obs => obs.draw())
        this.obstacle5.forEach(obs => obs.draw())
        this.obstacle6.forEach(obs => obs.draw())
        this.square.draw()
        this.lifes.draw()
        this.score.draw()

        this.farola.forEach(far => far.draw())
        this.obstacle.forEach(obs => obs.draw())
        this.obstacle2.forEach(obs => obs.draw())


    },

    drawStage2() {
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 150, this.canvasSize.height / 2 + 180, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 190, this.canvasSize.height / 2 + 180, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.market.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 150, this.canvasSize.height - 430, 180, 200, this.canvasSize, './img/GAMEArtboard 8@100x.png'))
        this.mojito.push(new Mojitos(this.ctx, this.canvasSize.width / 2 + 200, this.canvasSize.height / 2 + 40, 30, 40, this.canvasSize, './img/GAMEArtboard 10@100x.png'))
        this.mojito.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 30, this.canvasSize.height / 2 - 130, 30, 40, this.canvasSize, './img/GAMEArtboard 10@100x.png'))
        this.beer.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 70, this.canvasSize.height / 2 + 150, 30, 40, this.canvasSize, './img/GAMEArtboard 11@100x.png'))
        this.cerveza.push(new Mojitos(this.ctx, this.canvasSize.width / 2 + 100, this.canvasSize.height / 2 - 200, 30, 40, this.canvasSize, './img/GAMEArtboard 11@100x.png'))
        this.cerveza.push(new Mojitos(this.ctx, this.canvasSize.width / 2 + 130, this.canvasSize.height / 2 + 60, 30, 40, this.canvasSize, './img/GAMEArtboard 11@100x.png'))
        this.edificio.push(new Cosas(this.ctx, this.canvasSize.width / 2, this.canvasSize.height / 2 - 400, 200, 200, this.canvasSize, './img/GAMEArtboard 7@100x.png'))
        this.edificio.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 170, this.canvasSize.height / 2 - 405, 120, 200, this.canvasSize, './img/GAMEArtboard 19@100x.png'))
        this.edificio.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 80, this.canvasSize.height / 2 - 405, 120, 200, this.canvasSize, './img/GAMEArtboard 19@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 + 40, this.canvasSize.height / 2 - 220, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 60, this.canvasSize.height / 2 - 220, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 10, this.canvasSize.height / 2 - 220, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 + 90, this.canvasSize.height / 2 + 100, 60, 60, this.canvasSize, './img/farola.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 + 50, this.canvasSize.height / 2 + 100, 60, 60, this.canvasSize, './img/farola.png'))


    },

    eventListener() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.square.move('right') : null
            e.keyCode === 39 ? this.square.move('left') : null
            e.keyCode === 40 ? this.square.move('down') : null
            // e.keyCode === 38 ? this.square.move('up') : null

            if (e.keyCode === 38 && this.square.posY <= 0 && this.score.mojitosNum === 4) {
                this.background.move()
                this.square.posX = this.canvasSize.width / 2
                this.square.posY = this.canvasSize.height - 40


                this.obstacle3 = []
                this.obstacle4 = []
                this.obstacle5 = []
                this.obstacle6 = []
                this.obstacle7 = []
                this.market = []
                this.score.mojitosNum = 0;

                this.obstacle = []

                this.obstacle2 = []
                this.farola = []


                this.drawStage2()

            } else if (e.keyCode === 38 && this.square.posY <= 0 && this.score.mojitosNum !== 4) {
                this.square.move('down')
                window.alert("NECESITAS RECOGER LOS MOJITOS")
            } else if (e.keyCode === 38) {
                this.square.move('up')
            }
        }


    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    generateObstacles() {
        this.obstacle.push(new Obstacles(this.ctx, 0 - 160, this.canvasSize.height / 2 + 120, 90, 50, this.canvasSize, './img/carpolice.png'))
        this.obstacle2.push(new Obstacles(this.ctx, this.canvasSize.width + 160, this.canvasSize.height / 2 + 150, 90, 50, this.canvasSize, './img/enrique.png'))
        this.obstacle7.push(new Obstacles(this.ctx, 0 - 200, this.canvasSize.height / 2 + 20, 90, 50, this.canvasSize, './img/carpolice.png'))
        this.obstacle3.push(new Obstacles(this.ctx, this.canvasSize.width + 10, this.canvasSize.height / 2 + 40, 90, 50, this.canvasSize, './img/cochegris.png'))
        this.obstacle4.push(new Obstacles(this.ctx, this.canvasSize.width + 30, this.canvasSize.height / 2 - 150, 90, 50, this.canvasSize, './img/carpolice2.png'))
        this.obstacle5.push(new Obstacles(this.ctx, 0 - 130, this.canvasSize.height / 2 - 240, 90, 50, this.canvasSize, './img/redcar.png'))
        this.obstacle6.push(new Obstacles(this.ctx, this.canvasSize.width + 80, this.canvasSize.height / 2 - 220, 90, 50, this.canvasSize, './img/cochegris.png'))
    },

    gameOver() {
        // document.location.reload();
        setTimeout(() => {
            clearInterval(this.interval);
        }, 500);
        this.image = new Image()
        this.image.src = './img/gameooover.png'
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, 351, 618)
        this.ctx.drawImage(this.image, 0, 200, 350, 230)

    },


    clearObstacles() {
        this.obstacle = this.obstacle.filter(obs => obs.posX >= 0);
    },

    generateMojito() {
        this.mojito.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 40, this.canvasSize.height / 2 + 40, 30, 40, this.canvasSize, './img/GAMEArtboard 10@100x.png'))
        this.mojito.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 150, this.canvasSize.height / 2 - 150, 30, 40, this.canvasSize, './img/GAMEArtboard 10@100x.png'))
        this.beer.push(new Mojitos(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 + 200, 30, 40, this.canvasSize, './img/GAMEArtboard 11@100x.png'))
        this.cerveza.push(new Mojitos(this.ctx, this.canvasSize.width / 2 + 100, this.canvasSize.height / 2 - 200, 30, 40, this.canvasSize, './img/GAMEArtboard 11@100x.png'))
    },

    generateEdifico() {
        this.edificio.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 170, this.canvasSize.height - 720, 120, 200, this.canvasSize, './img/GAMEArtboard 19@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 140, this.canvasSize.height / 2 + 80, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 100, this.canvasSize.height / 2 + 80, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 180, this.canvasSize.height / 2 + 80, 80, 80, this.canvasSize, './img/GAMEArtboard 6@100x.png'))
        this.market.push(new Cosas(this.ctx, this.canvasSize.width / 2 - 20, this.canvasSize.height - 410, 180, 200, this.canvasSize, './img/GAMEArtboard 9@100x.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 + 90, this.canvasSize.height / 2 - 300, 60, 60, this.canvasSize, './img/farola.png'))
        this.farola.push(new Cosas(this.ctx, this.canvasSize.width / 2 + 50, this.canvasSize.height / 2 - 300, 60, 60, this.canvasSize, './img/farola.png'))
    },

    isCollisionMojito(array) {  // COLISIÓN DE MOJITO
        array.forEach(elm => {
            if (

                this.square.posX < elm.posX + elm.width &&
                this.square.posX + this.square.width > elm.posX &&
                this.square.posY < elm.posY + elm.height &&
                this.square.posY + this.square.height > elm.posY
            ) {

                array.splice(array.indexOf(elm), 1);
                this.score.masMojito()

            }
        })
    },

    isObstacle2Collision(array) {  // COLISIONES COCHES
        array.forEach(elm => {
            if (
                this.square.posX < elm.posX + elm.width && // izquierda
                this.square.posX + this.square.width > elm.posX && // derecha
                this.square.posY < elm.posY + elm.height - this.square.height / 2 && // abajo
                this.square.posY + this.square.height > elm.posY + this.square.height - 15// arriba
            ) {
                this.lifes.takeAlife()
                this.square.posX = this.canvasSize.width / 2
                this.square.posY = this.canvasSize.height - 40
            }
        })
    },

    isObstacleCollision(array) {
        array.forEach(elm => {
            if (
                this.square.posX < elm.posX + elm.width &&
                this.square.posX + this.square.width > elm.posX &&
                this.square.posY < elm.posY + elm.height &&
                this.square.posY + this.square.height > elm.posY
            ) {
                this.square.vel = 0
                setTimeout(() => {
                    this.square.posX
                    this.square.posY
                    this.square.vel = 20
                },
                    300)
            }
        });
    }
}



