// редакционное расстояние, — метрика cходства между двумя строковыми последовательностями.
// Чем больше расстояние, тем более различны строки. Для двух одинаковых последовательностей расстояние равно нулю.
// По сути, это минимальное число односимвольных преобразований (удаления, вставки или замены), необходимых,
// чтобы превратить одну последовательность в другую.
// Например, LEV(’БИБА’, ‘БОБА’) = 1, так как потребуется провести одну замену ‘И’ на ‘О’

function levenshteinDistance(a, b) {
  const distanceMatrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i += 1) {
    distanceMatrix[0][i] = i;
  }

  for (let j = 0; j <= b.length; j += 1) {
    distanceMatrix[j][0] = j;
  }

  for (let j = 1; j <= b.length; j += 1) {
    for (let i = 1; i <= a.length; i += 1) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      distanceMatrix[j][i] = Math.min(
        distanceMatrix[j][i - 1] + 1,
        distanceMatrix[j - 1][i] + 1,
        distanceMatrix[j - 1][i - 1] + indicator
      );
    }
  }

  return distanceMatrix[b.length][a.length];
}

console.log(levenshteinDistance("БИЛА", "БОБРА"));
