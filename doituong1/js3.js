let Circle = function (radius) {
    radius = this.radius
    this.getRadius = function () {
        return radius
}
this.getArea = function () {
        return Math.PI * radius*radius ;
}
};
let circle = new Circle(2)