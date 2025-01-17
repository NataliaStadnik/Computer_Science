// позволяет добавлять в программу новые операции, не изменяя классы объектов, над которыми эти операции могут выполняться.
// Паттерн Посетитель предлагает разместить новое поведение в отдельном классе, вместо того чтобы множить его
// сразу в нескольких классах. Объекты, с которыми должно было быть связано поведение, не будут выполнять его самостоятельно.
// Вместо этого вы будете передавать эти объекты в методы посетителя.

class Monkey {
  eat() {
    console.log("I am eating banana");
  }

  accept(operation) {
    operation.visitMonkey(this);
  }
}

class Bear {
  sleep() {
    console.log("I am sleeping");
  }

  accept(operation) {
    operation.visitBear(this);
  }
}

class ActionVisitor {
  visitMonkey(monkey) {
    monkey.eat();
  }
  visitBear(bear) {
    bear.sleep();
  }
}

class ViewVisitor {
  visitMonkey() {
    console.log("I am small");
  }
  visitBear() {
    console.log("I am big");
  }
}

const monkey = new Monkey();
const bear = new Bear();

const action = new ActionVisitor();
const view = new ViewVisitor();

monkey.accept(action);
bear.accept(action);

monkey.accept(view);
bear.accept(view);
