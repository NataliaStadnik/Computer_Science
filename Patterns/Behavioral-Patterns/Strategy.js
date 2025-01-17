// определяет семейство схожих алгоритмов и помещает каждый из них в собственный класс,
// после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.

class Store {
  constructor(strategy) {
    this.strategy = strategy;
  }
  sell() {
    return this.strategy();
  }
}

const Meat = () => {
  console.log("Sell meat");
};

const Fish = () => {
  console.log("Sell fish");
};

const Vegetables = () => {
  console.log("Sell vegetables");
};

const store1 = new Store(Meat);
const store2 = new Store(Fish);
const store3 = new Store(Vegetables);

store1.sell();
store2.sell();
store3.sell();
