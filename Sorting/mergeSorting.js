// основанный на принципе «разделяй и властвуй».
// Она разбивает массив на более мелкие части, сортирует их, а затем объединяет (сливает) обратно,
// чтобы получить отсортированный массив.
// временная сложность O(n log n).

// 1. Разделение: Массив рекурсивно делится пополам, пока не получится набор массивов,
// каждый из которых содержит только один элемент.
// 2. Слияние: Пары отсортированных массивов объединяются в один, более крупный отсортированный массив.
// Процесс повторяется, пока все части не объединятся в один массив.
// 3. Слияние обратно: На каждом уровне рекурсии отсортированные части объединяются в один массив, сохраняя порядок элементов.

const mergeSort = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middle);
  const arrRight = arr.slice(middle);
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};

const merge = (arrFirst, arrSecond) => {
  const arrSort = [];
  let i = (j = 0);
  while (i < arrFirst.length && j < arrSecond.length) {
    arrSort.push(arrFirst[i] < arrSecond[j] ? arrFirst[i++] : arrSecond[j++]);
  }
  return [...arrSort, ...arrFirst.slice(i), ...arrSecond.slice(j)];
};

let inputArr = [5, 2, 4, 12, 6, 1, 3];
console.log(mergeSort(inputArr));
