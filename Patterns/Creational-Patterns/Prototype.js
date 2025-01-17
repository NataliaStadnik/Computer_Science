// позволяет копировать объекты, не вдаваясь в подробности их реализации.
// используется в тех случаях, когда создание экземпляра класса требует больших затрат
// ресурсов или занимает много времени.

class Monkey {
  constructor() {
    this.name = "monkey";
  }
}
Monkey.prototype.girl = true;

class Human {
  constructor() {}
}
Human.prototype.__proto__ = Monkey.prototype;
Human.prototype.state = "is sleeping";

const John = new Human();
console.log(John.name);
console.log(John.state);
console.log(John.girl);
