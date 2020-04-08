// class Obstacles {
//     constructor(ctx, posX, posY, obsW, obsH, canvasSize) {
//         this.ctx = ctx
//         // this.posX = Math.floor((Math.random() * 40) + 80)
//         this.posX = 0
//         this.posY = posY
//         this.obsW = Math.floor((Math.random() * 40) + 80)
//         this.obsH = obsH
//         this.canvasSize = {
//             width: canvasSize.width,
//             height: canvasSize.height
//         }
//         this.obs = undefined
//         this.speed = 1
//         this.image = new Image

//     }

//     drawObstacle() {

//         this.obs = new Image()
//         this.obs.src = './img/GAMEArtboard 16@100x.png'
//         this.obs.onload = () => this.obs.drawImage(this.obs, this.posX, this.posY, this.width, this.height)
//         // this.ctx.fillStyle = "white"
//         // this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH)
//     }
//     move() {
//         this.posX += this.speed
//         // this.posX -= this.speed
//     }

//     isCollision(square, obstacle) {
//         // console.log(square)
//         // console.log(square.posX)
//         // console.log("hola")
//         // console.log(obstacle)
//         // console.log(obstacle.posX)
//         // console.log(obstacle.posY)
//         return (square.posX < obstacle.posX + obstacle.obsW &&
//             square.posX + square.width > obstacle.posX &&
//             square.posY < obstacle.posY + obstacle.obsH &&
//             square.posY + square.height > obstacle.posY)

//     }
// }
