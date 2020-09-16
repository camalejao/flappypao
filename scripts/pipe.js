class Pipe {
    constructor(spriteTop, spriteBottom, pipeX, pipeY, speed) {
        this.spriteTop = spriteTop;
        this.spriteBottom = spriteBottom;
        this.pipeX = pipeX;
        this.pipeY = pipeY;
        this.speed = speed;

        this.pipes = [Object.assign({}, PIPE_1_INITIAL_STATE), 
            Object.assign({}, PIPE_2_INITIAL_STATE)];
        this.possibleY = [
            [-150, 400],
            [-300, 250],
            [0, 550],
            [-200, 350],
            [-250, 300]
        ];
    }

    show() {
        this.pipes.forEach(p => {
            image(this.spriteTop, p.canvasX, p.topY, this.pipeX, this.pipeY);
            image(this.spriteBottom, p.canvasX, p.bottomY, this.pipeX, this.pipeY);
        })
        this.move();
    }

    move() {
        this.pipes.forEach(p => {
            p.canvasX -= this.speed;
            if (p.canvasX < -CANVAS_WIDTH) {
                p.canvasX = CANVAS_WIDTH;
                
                let rng = Math.floor(Math.random() * 5);
                p.topY = this.possibleY[rng][0];
                p.bottomY = this.possibleY[rng][1];

                p.passed = false;
            }
        })
    }

    getCoordinates(idx) {
        let coords = {
            canvasX: this.pipes[idx].canvasX,
            canvasYTop: this.pipes[idx].topY,
            canvasYBottom: this.pipes[idx].bottomY,
            pipeX: this.pipeX,
            pipeY: this.pipeY
        }
        return coords;
    }

    reset() {
        this.pipes = [Object.assign({}, PIPE_1_INITIAL_STATE), 
            Object.assign({}, PIPE_2_INITIAL_STATE)];
    }

    checkScore(bread) {
        if (this.pipes[0].canvasX + this.pipeX < bread.canvasX
            && !this.pipes[0].passed) {
                this.pipes[0].passed = true;
                return true;
        } else if (this.pipes[1].canvasX + this.pipeX < bread.canvasX
            && !this.pipes[1].passed) {
                this.pipes[1].passed = true;
                return true;
        } else {
            return false;
        }
    }
}