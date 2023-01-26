/* Write a script to create different shapes(rectangle, square,
  circle, triangle) make all of them inherits from polygon.
 Display the area and each object parameter in your console
  by overriding toString()
 Draw your created shapes to a canvas element.
*/
// Polygon
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  toString() {
    // return area and premieter of the shape
    return `Area: ${this.area}, Preimeter: ${this.preimeter}`;
  }
}
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }
  get area() {
    return this.calcArea();
  }
  get preimeter() {
    return this.calcPreimeter();
  }
  calcPreimeter() {
    //rectangle preimeter = 2 * (height + width)
    return 2 * (this.height + this.width);
  }
  calcArea() {
    //rectangle area = height * width
    return this.height * this.width;
  }
}
// Square
class Square extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Square";
  }
  get area() {
    return this.calcArea();
  }
  get preimeter() {
    return this.calcPreimeter();
  }
  calcPreimeter() {
    //square preimeter = 4 * height
    return 4 * this.height;
  }
  calcArea() {
    //square area = height * width
    return this.height * this.width;
  }
}
// Circle
class Circle extends Polygon {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }
  get area() {
    return this.calcArea();
  }
  get preimeter() {
    return this.calcPreimeter();
  }
  calcPreimeter() {
    //circle preimeter = 2 * pi * radius
    return 2 * Math.PI * this.radius;
  }
  calcArea() {
    //circle area = pi * radius * radius
    return Math.PI * this.radius * this.radius;
  }
}
// Triangle
class Triangle extends Polygon {
  constructor(height, base) {
    super(height);
    this.name = "Triangle";
    this.base = base;
  }
  get area() {
    return this.calcArea();
  }
  get preimeter() {
    return this.calcPreimeter();
  }
  calcPreimeter() {
    //triangle preimeter = height + base + sqrt(height * height + base * base)
    return this.height + this.base + Math.sqrt(this.height * this.height + this.base * this.base);
  }
  calcArea() {
    //triangle area = (base * height) / 2
    return (this.base * this.height) / 2;
  }
}
// Create objects
const rectangle = new Rectangle(100, 50);
const square = new Square(50, 50);
const circle = new Circle(50);
const triangle = new Triangle(50, 100);

// Display the area and each object parameter in your console
// by overriding toString()
console.log(rectangle.toString());
console.log(rectangle.area);
console.log(square.toString());
console.log(square.area);
console.log(circle.toString());
console.log(circle.area);
console.log(triangle.toString());
console.log(triangle.area);

// Draw your created shapes to a canvas element.
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(200, 100 ,rectangle.height, rectangle.width);
ctx.fillStyle = "green";
ctx.fillRect(200, 200 ,square.height, square.width);
ctx.beginPath();
ctx.arc(300, 300, circle.radius, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
ctx.beginPath();
ctx.moveTo(200, 400);
ctx.lineTo(200 + triangle.base, 400);
ctx.lineTo(200 + (triangle.base / 2), 400 - triangle.height);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "yellow";
ctx.fill();
