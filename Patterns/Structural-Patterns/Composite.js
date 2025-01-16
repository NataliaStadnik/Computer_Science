// Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов
//  в древовидную структуру, а затем работать с ней так, как будто это единичный объект.

class Product {
  constructor(name) {
    this.name = name;
    this.isPaid = false;
  }

  pay(state) {
    this.isPaid = state;
  }
}

class ProductComposite {
  constructor(name) {
    this.items = [];
    if (name) {
      this.items.push(new Document(name));
    }
  }

  add(item) {
    this.items.push(item);
  }

  pay(state) {
    this.items.forEach((elem) => {
      elem.pay(state);
    });
  }
}

const products = new ProductComposite();
const prod1 = new Product("Apple");
const prod2 = new Product("Banana");
products.add(prod1);
products.add(prod2);

console.log(products);
products.pay(true);
console.log(products);
