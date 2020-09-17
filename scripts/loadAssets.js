function preload() {
    backgroundImage = loadImage('assets/background.jpg');
    breadImage = loadImage('assets/bread-mini.png');
    pipeImageTop = loadImage('assets/pipe-top.png');
    pipeImageBottom = loadImage('assets/pipe-bottom.png');
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.amp(0.15);
    scoreSound = loadSound('assets/score.mp3');
    scoreSound.amp(0.2);
    gameOverSound = loadSound('assets/damage.mp3');
    gameOverSound.amp(0.15);
}