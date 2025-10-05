 const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;
let indiceMassaCorporal; // peso / (altura * altura)
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento;
anoNascimento = 2025 - idade;


console.log(`${nome} ${sobrenome} tem, ${idade} anos e pesa ${peso} kg`);
console.log(`Tem ${alturaEmM} de altura, e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);