import { maior_r } from "./maior_recursivo_model";

let a: number[] = [1, 4, 10, 20, -1];
console.log("Array original:");
console.log(a);
let maior = maior_r(a);
console.log("O maior número do array é: ", maior);

