// позволяет уменьшить связанность множества классов между собой, благодаря перемещению этих связей в один класс-посредник.
// Паттерн Посредник заставляет объекты общаться не напрямую друг с другом, а через отдельный объект-посредник,
// который знает, кому нужно перенаправить тот или иной запрос. Благодаря этому, компоненты системы будут зависеть
//  только от посредника, а не от десятков других компонентов.

class Chat {
  showMessage(user, message) {
    const time = new Date().toDateString();
    const sender = user.getName();
    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.mediator.showMessage(this, message);
  }
}

const chat = new Chat();

const cat = new User("Cat", chat);
const dog = new User("Dog", chat);

cat.send("Hello!");
dog.send("Hi!");
