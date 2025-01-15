// (сортировка Хоара)
// Выбирается опорный элемент, затем массив разделяется на две части:
// элементы меньше опорного и элементы больше. Процесс повторяется рекурсивно для каждой части.
// имеет среднюю сложность O(n log n).

function QuickSort(List) {
  if (List.length <= 1) {
    return List;
  }

  const pivot = List[List.length - 1];
  const leftList = [];
  const rightList = [];

  for (let i = 0; i < List.length - 1; i++) {
    if (List[i] < pivot) {
      leftList.push(List[i]);
    } else {
      rightList.push(List[i]);
    }
  }
  return [...QuickSort(leftList), pivot, ...QuickSort(rightList)];
}

let inputArr = [5, 2, 4, 6, 1, 3];
console.log(QuickSort(inputArr));
