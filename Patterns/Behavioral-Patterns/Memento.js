// позволяет сохранять и восстанавливать прошлые состояния объектов, не раскрывая подробностей их реализации.
// Паттерн предлагает держать копию состояния в специальном объекте-снимке с ограниченным интерфейсом,
// позволяющим, например, узнать дату изготовления или название снимка. Но, с другой стороны,
// снимок должен быть открыт для своего создателя, позволяя прочесть и восстановить его внутреннее состояние.

// Паттерн проектирования Memento определяет трех различных участников:
// Originator (хозяин) - объект, умеющий создавать хранителя, а также знающий, как восстановить
// свое внутреннее состояние из хранителя.
// Caretaker (смотритель) - объект, который знает, почему и когда хозяин должен сохранять и восстанавливать себя.
// Memento (хранитель) - "ящик на замке", который пишется и читается хозяином и за которым присматривает смотритель.

class Memento {
  constructor(state) {
    this.state = state || "undefined";
  }

  getState() {
    return this.state;
  }
}

class Caretaker {
  constructor() {
    this._memento;
  }

  getMemento() {
    return this._memento;
  }

  setMemento(memento) {
    if (memento instanceof Memento) {
      this._memento = memento;
    }
  }
}

class Originator {
  constructor() {
    this._state;
  }

  setState(state) {
    this._state = state || "undefined";
  }

  getState() {
    return this._state;
  }

  saveState() {
    return new Memento(this._state);
  }

  restoreState(memento) {
    if (memento instanceof Memento) {
      this._state = memento.getState();
    }
  }
}

class Application {
  run() {
    const originator = new Originator();
    const caretaker = new Caretaker();

    originator.setState("on");
    console.log("State is " + originator.getState());
    caretaker.setMemento(originator.saveState());

    originator.setState("off");
    console.log("State is " + originator.getState());

    originator.restoreState(caretaker.getMemento());
    console.log("State is " + originator.getState());
  }
}

const application = new Application();
application.run();
