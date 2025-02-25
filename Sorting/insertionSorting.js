// Массив проходит поэлементно, и каждый элемент вставляется на правильное место среди уже отсортированных элементов.
// Простая и эффективная для небольших массивов.
// Сложность — O(n^2).
// Неэффективна для больших массивов, так как требует много сравнений и перемещений.

// в цикле один за другим выбираются элементы массива и сравниваются с элементами,
// стоящими перед ними, до тех пор пока не будет найдет элемент, меньший текущего, или мы не дойдем до начала массива.
// Перед ним мы и вставляем текущий, для этого предварительно сдвинув все элементы, которые оказались больше текущего,
// в сторону увеличения на один индекс.

function insertionSort(arr) {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(inputArr));
