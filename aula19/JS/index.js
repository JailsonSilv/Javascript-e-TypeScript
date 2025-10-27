function meuEscopo() {
  const form = document.querySelector('.form');
  const resultados = document.querySelector('.resultado');

  const pessoas = [];

  form.addEventListener("submit", function(evento){
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas)

    resultados.innerHTML += `<h2> ${nome.value} ${sobrenome.value}, ${peso.value}Kg, ${altura.value}Altura </h2>`
  });

};
meuEscopo();