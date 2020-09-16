function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent("game");
    frameRate(40);
    game = new Game();
    game.setup();
}

function keyPressed() {
    game.keyPressed(key);
}

function mousePressed() {
    game.keyPressed("ArrowUp");
}

function draw() {
    game.draw();
}