/*Primitivos (IMUTAVEIS)  - string, number, boolean, undefined, null (bigint, symbol) - valor

Referência (MUTAVEL) - array, object, function
*/

let a = 1;
let b = a;
console.log(a, b)

a = 2;
console.log(a, b)

// Valor de B não foi alterado, mesmo o valor de A sendo alterado. (IMUTAVEL)

let teste1 = [1, 2, 3];
let teste2 = teste1;

console.log(teste1, teste2);

teste1.push(4)
console.log(teste1);
console.log(teste1, teste2);
// MUTAVEL => Ao adicionar mais um numero no ARRAY no teste1 mondificou o teste2.

teste1.pop(); // removendo um numero.

console.log(teste1)
console.log(teste1, teste2);

