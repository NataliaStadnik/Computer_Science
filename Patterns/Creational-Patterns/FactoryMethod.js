// Фабричный метод определяет интерфейс для создания объекта, но позволяет субклассам решать,
// какой класс инстанцировать. Это позволяет клиентам использовать объекты, не зная о точном классе объекта,
// который будет создан. Другими словами, фабричный метод делегирует создание объектов субклассам.

class Product {
  constructor() {
    this.name = "Product";
  }

  getName() {
    return this.name;
  }
}

class ConcreteProduct extends Product {
  constructor() {
    super();
    this.name = "ConcreteProduct";
  }
}

class Creator {
  createProduct() {
    return new ConcreteProduct();
  }
}

const creator = new Creator();
const product = creator.createProduct();
console.log(product.getName()); // Output: ConcreteProduct
