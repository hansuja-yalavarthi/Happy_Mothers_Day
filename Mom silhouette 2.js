class pictureclass extends BaseClass {
    constructor(x, y) {
        super(x, y, 100, 100);
        this.image = loadImage("Mom silhouette 2.png");
    }

    display() {

        image(this.image, this.body.position.x, this.body.position.y, 100, 100);

    }
}