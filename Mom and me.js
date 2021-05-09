class Mom extends BaseClass {
    constructor(x, y) {
        super(x, y, 400, 400);
        this.image = loadImage("Mom and me.jpg");
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 400, 400);

    }
}