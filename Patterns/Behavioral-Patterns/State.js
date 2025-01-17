// позволяет объектам менять поведение в зависимости от своего состояния.
// Извне создаётся впечатление, что изменился класс объекта.
// Паттерн Состояние предлагает создать отдельные классы для каждого состояния, в котором
//  может пребывать объект, а затем вынести туда поведения, соответствующие этим состояниям.

class Switch {
  constructor() {
    this.states = [new SwitchOff(), new SwitchOn()];
    this.current = this.states[0];
  }

  change() {
    const totalStates = this.states.length;
    let currentIndex = this.states.findIndex((state) => state === this.current);
    if (currentIndex + 1 < totalStates)
      this.current = this.states[currentIndex + 1];
    else this.current = this.states[0];
  }

  getState() {
    return this.current.sign();
  }
}

class State {
  constructor(state) {
    this.state = state;
  }
}

class SwitchOff extends State {
  constructor() {
    super("off");
  }

  sign() {
    return "OFF";
  }
}

class SwitchOn extends State {
  constructor() {
    super("on");
  }

  sign() {
    return "ON";
  }
}

const switcher = new Switch();

console.log(switcher.getState());
switcher.change();

console.log(switcher.getState());
switcher.change();

console.log(switcher.getState());
switcher.change();
