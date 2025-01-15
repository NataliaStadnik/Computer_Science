// При пирамидальной сортировке массив представляется в виде двоичной кучи,
// и на каждом шаге извлекается наибольший элемент из кучи, перестраивая её.
// Имеет гарантированную сложность O(n log n) и не требует дополнительной памяти, как сортировка слиянием.
// Меньше подходит для очень больших объемов данных из-за сложности построения кучи.

// Двоичная куча — это законченное двоичное дерево, в котором элементы хранятся в особом порядке:
// значение в родительском узле больше (или меньше) значений в его двух дочерних узлах.
// Первый вариант называется max-heap, а второй — min-heap. Куча может быть представлена двоичным деревом или массивом.

function heapSort(array) {
  let heap = createHeap(array);
  let sortedArray = [];
  while (heap.length > 0) {
    sortedArray.unshift(heap.shift());
    heap = createHeap(heap);
  }
  return sortedArray;
}

function createHeap(array) {
  let heap = [...array];
  for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
    heapify(heap, i, heap.length);
  }
  return heap;
}

function heapify(heap, i, heapSize) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (left < heapSize && heap[left] > heap[largest]) {
    largest = left;
  }
  if (right < heapSize && heap[right] > heap[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [heap[i], heap[largest]] = [heap[largest], heap[i]];
    heapify(heap, largest, heapSize);
  }
}

let inputArr = [5, 2, 22, 4, 6, 1, 3];
console.log(heapSort(inputArr));
