function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

function fibonachi(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(factorial(4));
console.log(fibonachi(8));
