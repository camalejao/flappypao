class Game {
    constructor() {
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
            this.started = true;
            this.showText = false;
            bread.jump();
        }
    }

    draw() {
        gameBackground.show();
        
        if (this.showText) {
            textSize(32);
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
        
        textSize(72);
        textAlign(CENTER, CENTER);
        fill('#c9ac68')
        strokeWeight(6)
        stroke('#986d34');
        text(score, CANVAS_WIDTH/2, CANVAS_HEIGHT/6);

        if (this.started && (bread.checkFall() || bread.checkCollision(pipe.getCoordinates(0))
            || bread.checkCollision(pipe.getCoordinates(1)))) {
            noLoop();
            this.started = false;
            tryAgainButton.draw();
        }

        if (pipe.checkScore(bread)) score++;
    }

    reset() {
        score = 0;
        this.started = true;
        pipe.reset();
        bread.reset();
        tryAgainButton.rmv();
        loop();
    }
}