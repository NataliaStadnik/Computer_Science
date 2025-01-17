// class Animal {
//   constructor(name: string) {}
//   getName() {}
//   saveAnimal(a: Animal) {}
// }

// Он решает две, занимаясь работой с хранилищем данных в методе saveAnimal 
// и манипулируя свойствами объекта в конструкторе и в методе getAnimalName.


class Animal {
    constructor(name: string){ }
    getName() { }
}

class AnimalDB {
    getAnimal(a: Animal) { }
    saveAnimal(a: Animal) { }
}