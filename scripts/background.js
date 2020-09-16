class GameBackground {
    constructor(image, speed) {
        this.image = image;
        this.speed = speed;
        this.x1 = 0;
        this.x2 = BACKGROUND_W;
    }
  
    show() {
        image(this.image, this.x1, 0, BACKGROUND_W, BACKGROUND_H);
        image(this.image, this.x2, 0, BACKGROUND_W, BACKGROUND_H);
        this.move();
    }
  
    move() {
        this.x1 -= this.speed;
        this.x2 -= this.speed;
  
        if (this.x1 < -BACKGROUND_W) {
            this.x1 = BACKGROUND_W;
        }
        if (this.x2 < -BACKGROUND_W) {
            this.x2 = BACKGROUND_W;
        }
    }

    changeSpeed(newSpeed) {
        this.speed = newSpeed;
    }
  }