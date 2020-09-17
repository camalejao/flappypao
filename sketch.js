function setup() {
    const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.parent("game");
    frameRate(40);
    
    game = new Game();
    game.setup();

    canvas.mousePressed(() => game.keyPressed("ArrowUp"));

    tryAgainButton = new Button('Tentar Novamente',
        CANVAS_WIDTH/2, CANVAS_HEIGHT/3 * 2);
}

function keyPressed() {
    game.keyPressed(key);
}

function draw() {
    game.draw();
    tryAgainButton.btn.mousePressed(reset);
}

function reset() {
    game.reset();
}

function checkOption(option) {
    let opt = document.getElementById(option);
    return opt.checked;
}