// Абстрактная фабрика предоставляет интерфейс для создания семейств взаимосвязанных
// или взаимозависимых объектов без указания их конкретных классов. Это позволяет
// создавать семейств объектов, которые могут использоваться вместе, обеспечивая их совместимость.

class AbstractFactory {
  createProductA() {
    throw new Error("This method should be overridden!");
  }

  createProductB() {
    throw new Error("This method should be overridden!");
  }
}

class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

class ProductA1 {
  getName() {
    return "ProductA1";
  }
}

class ProductB1 {
  getName() {
    return "ProductB1";
  }
}

class ProductA2 {
  getName() {
    return "ProductA2";
  }
}

class ProductB2 {
  getName() {
    return "ProductB2";
  }
}

const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
console.log(productA1.getName()); // Output: ProductA1

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
console.log(productA2.getName()); // Output: ProductA2
