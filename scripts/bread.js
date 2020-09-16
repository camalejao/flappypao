class Bread {
    constructor(sprite, spriteX, spriteY, breadX, breadY, canvasX, canvasY) {
        this.sprite = sprite;
        this.spriteX = spriteX;
        this.spriteY = spriteY;
        this.breadX = breadX;
        this.breadY = breadY;
        this.canvasX = canvasX;
        this.canvasY = canvasY;

        this.hitbox = 0.9
        this.initialY = canvasY;
        this.gravity = 2;
        this.jumpHeight = 0;
        this.jumpBoost = -10;
    }

    jump() {
        if (this.canvasY > 0)
            this.jumpHeight = this.jumpBoost;
    }

    gravityForce() {
        this.canvasY += this.jumpHeight;
        this.jumpHeight += this.gravity;

        // if (this.canvasY > CANVAS_HEIGHT) {
        //     this.canvasY = CANVAS_HEIGHT - this.breadY;
        // }
    }

    show() {
        image(this.sprite, this.canvasX, this.canvasY, this.breadX, this.breadY);
    }

    checkFall() {
        return this.canvasY > CANVAS_HEIGHT;
    }

    checkCollision(coords) {
        // rect(this.canvasX, this.canvasY, this.breadX, this.breadY);
        // rect(coords.canvasX, coords.canvasYTop, coords.pipeX, coords.pipeY);
        // rect(coords.canvasX, coords.canvasYBottom, coords.pipeX, coords.pipeY);

        const collidedTop = collideRectRect(
            this.canvasX, this.canvasY,
            this.breadX * 0.95, this.breadY,
            coords.canvasX, coords.canvasYTop,
            coords.pipeX, coords.pipeY
        );
        const collidedBottom = collideRectRect(
            this.canvasX, this.canvasY,
            this.breadX * 0.95, this.breadY,
            coords.canvasX, coords.canvasYBottom,
            coords.pipeX, coords.pipeY
        );
        return collidedTop || collidedBottom;
    }

    reset() {
        this.canvasY = this.initialY;
    }
}