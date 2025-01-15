// - проходит по каждому элементу структуры данных до тех пор, пока не найдет нужный элемент или не дойдет до конца.
// - имеет временную сложность O(n)
// - полезен в случаях, когда массив небольшой или когда элементы не отсортированы.

function linearSearch(numbersArray, targetNumber) {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === targetNumber) {
      return i;
    }
  }
  return -1;
}

const startArr = [20, 12, 2, 33, 4, 15, 6, 74, 8, 92, 10, 11, 12, 33, 14, 65];
console.log(linearSearch(startArr, 15));
