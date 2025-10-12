let num1 = 9.49;
//let num2 = Math.floor(num1);  -> Pra cima
//let num2 = Math.ceil(num1); -> Pra baixo
//let num2  = Math.round(num1); -> Se for 9.49 vai arredondar pra baixo 9. Se for 9.50 vai arredondar pra cima 10. 
//console.log(Math.max(1, 5, 10, 15, -100, -150, 155));  -> Vai trazer o maior numero.
// console.log(Math.min(1, 5, 10, 15, -100, -150, 155)); -> Vai trazer o menor numero.

const aleatorio = Math.round(Math.random() * (1 - 10) + 10);
console.log(aleatorio);