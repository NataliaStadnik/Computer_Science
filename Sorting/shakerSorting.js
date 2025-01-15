// O(n²)
// оптимизированный алгоритм пузырьковой сортировки.
// происходит в двух направлениях поочередно, постепенно сужая диапазон сортировки.
// В итоге за один проход в конец массива “всплывает” максимальный элемент из диапазона,
// а за следующий проход — в начало массива минимальный (мы рассматриваем сортировку по возрастанию).
// Эти элементы можно больше не рассматривать и таким образом диапазон сужается с двух сторон.

function cocktailSort(arr) {
  let left = (firstSwap = 0);
  let right = (lastSwap = arr.length - 1);
  while (left < right) {
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        lastSwap = i;
      }
    }
    right = lastSwap;
    for (let i = right; i > left; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        firstSwap = i;
      }
    }
    left = firstSwap;
  }
  return arr;
}

let inputArr = [5, 2, 22, 4, 6, 1, 3];
console.log(cocktailSort(inputArr));
