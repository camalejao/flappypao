class Game {
    constructor() {

    }

    setup() {
        gameBackground = new GameBackground(backgroundImage, 2);
        bread = new Bread(breadImage, 432, 471, 64, 77, CANVAS_WIDTH/3 + 64, CANVAS_HEIGHT/2);
        pipe = new Pipe(pipeImageTop, pipeImageBottom, 150, 400, 5);
    }

    keyPressed(key) {
        if (key == "ArrowUp") {
            bread.jump();
        }
    }

    draw() {
        gameBackground.show();
        pipe.show();
        bread.gravityForce();
        bread.show();
        
        textSize(72);
        textAlign(CENTER, CENTER);
        strokeWeight(6)
        stroke('white');
        text(score, CANVAS_WIDTH/2, CANVAS_HEIGHT/6);

        if(bread.checkFall() || bread.checkCollision(pipe.getCoordinates(0))
            || bread.checkCollision(pipe.getCoordinates(1))) {
            noLoop();
        }

        if(pipe.checkScore(bread)) score++;
    }
}