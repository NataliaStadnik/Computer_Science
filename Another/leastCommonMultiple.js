//  НОК
import { euclideanAlgorithm } from "./euclideanAlgorithm.js";

function leastCommonMultiple(a, b) {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

console.log(leastCommonMultiple(4, 60));
