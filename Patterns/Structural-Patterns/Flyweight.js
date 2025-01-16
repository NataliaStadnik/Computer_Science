//  Данный паттерн проектирования позволяет вместить большее количество объектов в отведённую оперативную память.
//  Легковес экономит память, разделяя общее состояние объектов между собой, вместо хранения одинаковых данных в
//  каждом объекте.

class Pizza {
  constructor(ingredient, price) {
    this.ingredient = ingredient;
    this.price = price;
  }
}

class PizzaFactory {
  constructor() {
    this._pizzas = [];
  }

  createPizza(ingredient, price) {
    let pizza = this.getPizza(ingredient);
    if (pizza) {
      return pizza;
    } else {
      const newPizza = new Pizza(ingredient, price);
      this._pizzas.push(newPizza);
      return newPizza;
    }
  }

  getPizza(ingredient) {
    return this._pizzas.find((elem) => elem.ingredient === ingredient);
  }
}

const factory = new PizzaFactory();
const cheese1 = factory.createPizza("cheese with tomatoes", 150);
const cheese2 = factory.createPizza("cheese with tomatoes", 150);
const meat = factory.createPizza("meat and cheese", 200);

console.log(factory._pizzas);
