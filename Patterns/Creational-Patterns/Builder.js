// позволяет создавать сложные объекты пошагово. Строитель даёт возможность использовать один и тот же
// код строительства для получения разных представлений объектов.
// Паттерн Строитель предлагает вынести конструирование объекта за пределы его собственного класса,
// поручив это дело отдельным объектам, которые следует называть строителями.

class AbstactHouse {
  constructor(builder) {
    this.size = builder.size;
    this.wall = builder.wall || false;
    this.roof = builder.roof || false;
    this.door = builder.door || false;
  }
}

class SmallHouse extends AbstactHouse {
  constructor(builder) {
    super(builder);
    this.pipe = builder.pipe;
    this.window = builder.window;
  }
}

class Skyscraper extends AbstactHouse {
  constructor(builder) {
    super(builder);
    this.elevator = builder.elevator;
    this.stairs = builder.stairs;
  }
}

class Builder {
  constructor(size) {
    this.size = size;
  }

  addWall() {
    this.wall = true;
    return this;
  }

  addRoof() {
    this.roof = true;
    return this;
  }

  addDoor() {
    this.door = true;
    return this;
  }
}

class SmallHouseBuilder extends Builder {
  constructor(size) {
    super(size);
  }

  setPipe(pipe) {
    this.pipe = pipe;
    return this;
  }

  setWindow(window) {
    this.window = window;
    return this;
  }
}

class SkyscraperBuilder extends Builder {
  constructor(size) {
    super(size);
  }

  setElevator(elevator) {
    this.elevator = elevator;
    return this;
  }

  setStairs(stairs) {
    this.stairs = stairs;
    return this;
  }
}

const smallHouse = new SmallHouseBuilder(100);
smallHouse.addDoor().addRoof().addWall().setPipe(1).setWindow(2);

const skyscraper = new SkyscraperBuilder(1000);
skyscraper.addDoor().addRoof().addWall().setElevator(1).setStairs(2);

console.log(smallHouse);
console.log(skyscraper);
