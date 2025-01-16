// Мост — это структурный паттерн проектирования, который разделяет один или несколько классов
// на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.
// Паттерн Мост предлагает заменить наследование агрегацией или композицией.
// Для этого нужно выделить одну из таких «плоскостей» в отдельную иерархию и ссылаться на объект этой иерархии,
// вместо хранения его состояния и поведения внутри одного класса.

class Circle {
  constructor(color) {
    this.color = color;
  }

  getDescr() {
    return "Circle in " + this.color.getColor();
  }

  setColor(color) {
    this.color = color;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  getDescr() {
    return "Square in " + this.color.getColor();
  }

  setColor(color) {
    this.color = color;
  }
}

class RedColor {
  getColor() {
    return "red";
  }
}

class WhitedColor {
  getColor() {
    return "white";
  }
}

const red = new RedColor();
const white = new WhitedColor();
const circle = new Circle(red);
const square = new Square(white);

console.log(circle.getDescr());
console.log(square.getDescr());

circle.setColor(white);
square.setColor(red);

console.log(circle.getDescr());
console.log(square.getDescr());
