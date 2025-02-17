// Треугольник Паскаля — бесконечная таблица биномиальных коэффициентов, имеющая треугольную форму.
// В этом треугольнике на вершине и по бокам стоят единицы.
// Каждое число равно сумме двух расположенных над ним чисел.
// Строки треугольника симметричны относительно вертикальной оси.

function pascalTriangle(lineNumber) {
  const currentLine = [1];
  const currentLineSize = lineNumber + 1;

  for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
    currentLine[numIndex] =
      (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
  }
  return currentLine;
}

console.log(pascalTriangle(8));
