function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("game");
    frameRate(40);
    
    game = new Game();
    game.setup();

    tryAgainButton = new Button('Tentar Novamente',
        CANVAS_WIDTH/2, CANVAS_HEIGHT/3 * 2);
}

function keyPressed() {
    game.keyPressed(key);
}

function mousePressed() {
    game.keyPressed("ArrowUp");
}

function draw() {
    game.draw();
    tryAgainButton.btn.mousePressed(reset);
}

function reset() {
    game.reset();
}