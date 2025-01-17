// class Animal {
//   constructor(name: string) {}
//   getName() {}
// }

// const animals: Array<Animal> = [
//     new Animal('lion'),
//     new Animal('mouse')
// ];

// function AnimalSound(a: Array<Animal>) {
//     for(let i = 0; i <= a.length; i++) {
//         if(a[i].name == 'lion')
//             return 'roar';
//         if(a[i].name == 'mouse')
//             return 'squeak';
//     }
// }

// Самая главная проблема такой архитектуры заключается в том, что функция определяет то, 
// какой звук издаёт то или иное животное, анализируя конкретные объекты. 
// при появлении новых видов животных, нам, для того, чтобы с её помощью можно было бы узнавать звуки, 
// издаваемые ими, придётся её изменить.

class Animal {
  makeSound(){}
   
}

class Lion extends Animal {
  makeSound() {
    return 'roar';
  }
}

class Squirrel extends Animal {
  makeSound() {
    return 'squeak';
  }
}

class Snake extends Animal {
  makeSound() {
    return 'hiss';
  }
}


function AnimalSound(a: Array<Animal>) {
  for(let i = 0; i <= a.length; i++) {
    a[i].makeSound();
  }
}
