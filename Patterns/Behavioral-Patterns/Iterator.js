// даёт возможность последовательно обходить элементы составных объектов, не раскрывая их внутреннего представления.

class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const elements = [1, 2, 3, 4, 5];
const elementsIterator = new Iterator(elements);
console.log(elementsIterator.next());
console.log(elementsIterator.next());
