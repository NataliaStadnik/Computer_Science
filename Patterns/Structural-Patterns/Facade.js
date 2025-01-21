// Фасад — это структурный паттерн проектирования, который предоставляет простой интерфейс
// к сложной системе классов, библиотеке или фреймворку.

class CoffeeMashine {
  getElectricShock() {
    console.log("Get Electric!");
  }

  makeSound() {
    console.log("Sound!");
  }

  showLoadingScreen() {
    console.log("Loading..");
  }

  ready() {
    console.log("Ready to be used!");
  }

  closeEverything() {
    console.log("Power is off");
  }
}

class Watter {
  checkWater() {
    console.log("Check water level");
  }

  hotWater() {
    console.log("The water is heating up");
  }

  cancelHeating() {
    console.log("Heating is canceled");
  }

  cleanSystem() {
    console.log("Cleaning system");
  }
}

class Coffee {
  checkCoffee() {
    console.log("Check coffee");
  }

  grindCoffee() {
    console.log("Coffee is grinding");
  }

  cancelGrinding() {
    console.log("Grinding is canceled");
  }
}

class CoffeeMashineFacade {
  constructor(machine, water, coffee) {
    this.machine = machine;
    this.water = water;
    this.coffee = coffee;
  }

  turnOn() {
    this.machine.getElectricShock();
    this.machine.makeSound();
    this.machine.showLoadingScreen();
    this.water.checkWater();
    this.water.hotWater();
    this.coffee.checkCoffee();
    this.coffee.grindCoffee();
    this.machine.ready();
  }

  turnOff() {
    this.machine.makeSound();
    this.coffee.cancelGrinding();
    this.water.cancelHeating();
    this.water.cleanSystem();
    this.machine.closeEverything();
  }
}

const coffeeMashine = new CoffeeMashineFacade(
  new CoffeeMashine(),
  new Watter(),
  new Coffee()
);
coffeeMashine.turnOn();
coffeeMashine.turnOff();
