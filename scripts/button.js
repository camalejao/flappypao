class Button {
    constructor(text, x, y) {
        this.text = text;
        this.x = x;
        this.y = y;

        this.btn = createButton(this.text);
        this.btn.addClass('hidden')
    }

    draw() {
        this.btn.position(this.x, this.y);
        this.btn.parent('game');
        this.btn.removeClass('hidden');
        this.btn.center('horizontal');
        this.btn.addClass('restart-button');
    }

    rmv() {
        this.btn.remove();
    }
}