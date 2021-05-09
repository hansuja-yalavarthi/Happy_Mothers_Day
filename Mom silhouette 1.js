class PictureClass extends BaseClass {
    constructor(x, y) {
        super(x, y, 50, 100);
        this.image = loadImage("Mom silhouette 1.png");
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 50, 100);

    }
}