function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function () {
        return this.width * this.height;
    }
    this.permitter = function () {
        return 2 * (this.width + this.height);
    }
    this.display = function () {
        console.log("width: " + this.width + " height: " + this.height + " area: " + this.getArea() + " premitter: " + this.permitter());
    }
}
var rect = new Rectangle(10, 20);
rect.display();