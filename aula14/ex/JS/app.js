const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById('num-id');
const textou = document.getElementById('text');
const numInteiro = document.getElementById('num-inteiro');


numeroTitulo.innerHTML = numero;
textou.innerHTML = ' ';
textou.innerHTML += `<p> Raiz quadrada: ${numero ** (1/2)}</p>`
textou.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`
textou.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`
textou.innerHTML += `<p> Arredondando para baixo: ${Math.floor(numero)}.</p>`
textou.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}</p>`
textou.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)}</p>`