class Mom extends BaseClass {
    constructor(x, y) {
        super(x, y, 720, 400);
        this.image = loadImage("Mom and me.jpg");
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 720, 400);

    }
}