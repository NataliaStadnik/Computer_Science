// превращает запросы в объекты, позволяя передавать их как аргументы при вызове методов, ставить запросы в очередь,
// логировать их, а также поддерживать отмену операций.

class Receiver {
  constructor() {
    this.result = 0;
  }

  add(value) {
    this.result += value;
    console.log(` + ${value} dollars`);
  }

  subtract(value) {
    this.result -= value;
    console.log(` - ${value} dollars`);
  }

  setResult(value) {
    this.result = value;
  }

  getResult() {
    console.log(`Now in your account  ${this.result} dollars`);
    return this.result;
  }
}

class AddCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.add(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}

class SubtractCommand {
  constructor(calculator, value) {
    this.calculator = calculator;
    this.value = value;
    this.undoResult = calculator.getResult();
  }

  execute() {
    this.calculator.subtract(this.value);
  }

  undo() {
    this.calculator.setResult(this.undoResult);
  }
}

class Invoker {
  constructor() {
    this.calculator = new Receiver();
    this.commands = [];
    this.command = null;
  }

  add(value) {
    this.command = new AddCommand(this.calculator, value);
    this.commands.push(this.command);
    this.command.execute();
  }

  subtract(value) {
    this.command = new SubtractCommand(this.calculator, value);
    this.commands.push(this.command);
    this.command.execute();
  }

  undo() {
    if (this.commands.length === 0) {
      throw new Error("stack is empty");
    }
    console.log("Undo command");
    this.command = this.commands.pop();
    this.command.undo();
  }

  getCount() {
    return this.calculator.getResult();
  }
}

const accountant = new Invoker();
accountant.add(5);
accountant.add(10);
accountant.add(1);
accountant.subtract(4);
accountant.undo();
accountant.getCount();
