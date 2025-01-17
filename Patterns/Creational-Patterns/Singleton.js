// гарантирует, что класс имеет только один экземпляр, и предоставляет глобальную точку доступа
// к этому экземпляру. Данный паттерн определяет альтернативный способ создания объектов -
// в данном случае уникальных объектов, то есть гарантируется существование в приложении не более
// одного экземпляра данного класса.

class Singleton {
  id;
  static instance;

  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }
}

const object1 = new Singleton();
const object2 = new Singleton();

console.log(object1 instanceof Singleton);
console.log(object1 === object2);

object1.setId(1);
console.log(object2.getId());
console.log(object1.getId());
