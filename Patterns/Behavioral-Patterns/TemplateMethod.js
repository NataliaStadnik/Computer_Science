// определяет скелет алгоритма, перекладывая ответственность за некоторые его шаги на подклассы.
// Паттерн позволяет подклассам переопределять шаги алгоритма, не меняя его общей структуры.
// предлагает разбить алгоритм на последовательность шагов, описать эти шаги в отдельных методах и вызывать их
// в одном шаблонном методе друг за другом.
// Это позволит подклассам переопределять некоторые шаги алгоритма, оставляя без изменений его структуру и
// остальные шаги, которые для этого подкласса не так важны.

class CaffeineBeverage {
  prepareRecipe() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  boilWater() {
    console.log("Boiling water");
  }

  pourInCup() {
    console.log("Pouring into cup");
  }

  brew() {}
  addCondiments() {}
}

class Tea extends CaffeineBeverage {
  brew() {
    console.log("Steeping the tee");
  }

  addCondiments() {
    console.log("Adding Lemon");
  }
}

class Coffee extends CaffeineBeverage {
  brew() {
    console.log("Dripping Coffee through filter");
  }

  addCondiments() {
    console.log("Adding Sugar and Milk");
  }
}

class Application {
  run() {
    const tea = new Tea();
    console.log("PREPARE TEA");
    tea.prepareRecipe();

    const coffee = new Coffee();
    console.log("PREPARE COFFEE");
    coffee.prepareRecipe();
  }
}

const application = new Application();
application.run();
