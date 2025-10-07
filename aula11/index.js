let varA = 'A';  // B
let varB = 'B'; // C
let varC = 'C';// A

//  [varA, varB, varC] = [varB, varC, varA];
  

const varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

/* Acima criei uma variavel temporaria apenas para armazenar o valor de VARa*/

console.log(varA, varB, varC);