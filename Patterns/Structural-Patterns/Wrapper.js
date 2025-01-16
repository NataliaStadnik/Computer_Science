// Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять
// объектам новую функциональность, оборачивая их в полезные «обёртки».

class interfacePizza {
  getCost() {}
  getDescription() {}
}

class Margaritta extends interfacePizza {
  cost = 10;
  ingredients = "Cheese";

  getCost() {
    return this.cost;
  }

  getDescription() {
    return "Pizza with " + this.ingredients;
  }
}

class MeatPizza extends interfacePizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
    this.ingredients = "Meat";
  }

  getCost() {
    return this.pizza.getCost() + 2;
  }

  getDescription() {
    return this.pizza.getDescription() + " and " + this.ingredients;
  }
}

class PineapplePizza extends interfacePizza {
  constructor(pizza) {
    super();
    this.pizza = pizza;
    this.ingredients = "Pineapple";
  }

  getCost() {
    return this.pizza.getCost() + 4;
  }

  getDescription() {
    return this.pizza.getDescription() + " and " + this.ingredients;
  }
}

let pizza = new Margaritta();
console.log(pizza.getDescription());

pizza = new MeatPizza(pizza);
console.log(pizza.getDescription());

pizza = new PineapplePizza(pizza);
console.log(pizza.getDescription());
