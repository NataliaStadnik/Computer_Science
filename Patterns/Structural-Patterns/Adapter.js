// преобразует интерфейс класса к другому интерфейсу, на который рассчитан клиент.
// Адаптер обеспечивает совместную работу классов, невозможную в обычных условиях из-за несовместимости интерфейсов.

class Sparrow {
  fly() {
    console.log("I can fly");
  }

  eat() {
    console.log("I eat insects");
  }
}

class Penguin {
  swim() {
    console.log("I can only swim");
  }

  eat() {
    console.log("I eat fish");
  }
}

class Adapter {
  constructor(penguin) {
    this.penguin = penguin;
  }

  fly() {
    this.penguin.swim();
  }

  eat() {
    this.penguin.eat();
  }
}

const sparrow = new Sparrow();
const penguin = new Penguin();
const adapterBird = new Adapter(penguin);
adapterBird.fly();
adapterBird.eat();
