// - работает только на отсортированных массивах.
// - делит массив пополам и сравнивает средний элемент с искомым значением. Если средний элемент не равен искомому,
// алгоритм повторяет процесс для соответствующей половины массива.
// - имеет временную сложность O(log n)

function sorting(arr) {
  return arr.sort((a, b) => a - b);
}

function binarySearch(arr, targetNumber) {
  let left = 0;
  let right = arr.length - 1;
  let foundIndex = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === targetNumber) {
      foundIndex = mid;
      break;
      status;
    } else if (arr[mid] < targetNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return foundIndex;
}

const startArr = [20, 12, 2, 33, 4, 15, 6, 74, 8, 92, 10, 11, 12, 33, 14, 65];
console.log(binarySearch(sorting(startArr), 11));
