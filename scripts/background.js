class GameBackground {
    constructor(image, speed) {
        this.image = image;
        this.speed = speed;
        this.x1 = 0;
        this.x2 = CANVAS_WIDTH;
    }
  
    show() {
        image(this.image, this.x1, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        image(this.image, this.x2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.move();
    }
  
    move() {
        this.x1 -= this.speed;
        this.x2 -= this.speed;
  
        if (this.x1 < -CANVAS_WIDTH) {
            this.x1 = CANVAS_WIDTH;
        }
        if (this.x2 < -CANVAS_WIDTH) {
            this.x2 = CANVAS_WIDTH;
        }
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }
  }