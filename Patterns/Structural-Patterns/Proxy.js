// Заместитель — это структурный паттерн проектирования, который позволяет подставлять вместо реальных объектов
// специальные объекты-заменители. Эти объекты перехватывают вызовы к оригинальному объекту, позволяя сделать
//  что-то до или после передачи вызова оригиналу.

class PersonalAccount {
  open() {
    console.log("Account is opened");
  }

  close() {
    console.log("Account is closed");
  }
}

class Authenticate {
  constructor(state) {
    this.state = state;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.state.open();
    } else {
      console.log("Access denied");
    }
  }

  authenticate(password) {
    return password === "qwerty";
  }

  close() {
    this.state.close();
  }
}

const state = new Authenticate(new PersonalAccount());
state.open("1111");
state.open("qwerty");
state.close();
