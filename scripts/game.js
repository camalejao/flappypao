class Game {
    constructor() {
        this.firstTry = true;
        this.started = false;
        this.showText = true;
    }

    setup() {
        gameBackground = new GameBackground(backgroundImage, 2);
        bread = new Bread(breadImage, 432, 471, 64, 77, CANVAS_WIDTH/2 - 32, CANVAS_HEIGHT/2);
        pipe = new Pipe(pipeImageTop, pipeImageBottom, 150, 400, 5);
    }

    keyPressed(key) {
        if (key == "ArrowUp") {
            if (this.firstTry) {
                this.started = true;
                this.showText = false;
                this.firstTry = false;
            }
            if (this.started && checkOption('sound')) {
                jumpSound.play(0, 0, 0.5);
            }
            bread.jump();
        }
    }

    draw() {
        gameBackground.show();
        
        if (this.showText) {
            textFont('Helvetica', 32);
            textAlign(CENTER, CENTER);
            fill('#c9ac68')
            strokeWeight(6)
            stroke('#986d34');
            text('Clique/toque ou use \u2191\npara começar a jogar',
                CANVAS_WIDTH/2, CANVAS_HEIGHT/5 * 4);
        }

        if (this.started) {
            pipe.show();
            bread.gravityForce();
        }
        bread.show();
        
        textFont('Helvetica', 72);
        textAlign(CENTER, CENTER);
        fill('#c9ac68')
        strokeWeight(6)
        stroke('#986d34');
        text(score, CANVAS_WIDTH/2, CANVAS_HEIGHT/6);

        if (this.started && (bread.checkFall() || bread.checkCollision(pipe.getCoordinates(0))
            || bread.checkCollision(pipe.getCoordinates(1)))) {
                if (checkOption('sound')) gameOverSound.play(0, 0, 1);
                this.started = false;
                noLoop();
                tryAgainButton.draw();
        }

        if (pipe.checkScore(bread)) {
            if (checkOption('sound')) scoreSound.play();
            score++;
        }
    }

    reset() {
        score = 0;
        this.started = true;
        pipe.reset();
        bread.reset();
        tryAgainButton.rmv();
        loop();
        this.keyPressed("ArrowUp");
    }
}