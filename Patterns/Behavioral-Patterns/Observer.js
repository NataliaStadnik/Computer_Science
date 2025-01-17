// создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.
// Паттерн Наблюдатель предлагает хранить внутри объекта издателя список ссылок на объекты подписчиков,
// причём издатель не должен вести список подписки самостоятельно. Он предоставит методы, с помощью которых
// подписчики могли бы добавлять или убирать себя из списка.

class Observer {
  events = {};

  observe(ev, handler) {
    if (!this.events[ev]) {
      this.events[ev] = [handler];
    } else {
      this.events[ev].push(handler);
    }
  }

  unobserve(ev, handler) {
    if (!this.events[ev]) return;

    if (!handler || this.events[ev].length === 1) {
      delete this.events[ev];
    } else {
      this.events[ev] = this.events[ev].filter((fn) => fn !== handler);
    }
  }

  trigger(ev) {
    if (!this.events[ev]) return;

    this.events[ev].forEach((fn) => fn());
  }
}

const observer = new Observer();

observer.observe("echo", () => console.log("Hello"));
observer.observe("echo", () => console.log("Orwell"));
observer.observe("echo", () => console.log("World"));

observer.unobserve("echo", () => console.log("Orwell"));
observer.trigger("echo");
