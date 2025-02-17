// эффективный алгоритм для нахождения наибольшего общего делителя двух целых чисел

export function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}

console.log(euclideanAlgorithm(234, 24));
