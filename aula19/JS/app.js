function exibirResultado () {
  const form = document.querySelector('.form');
  const resultados = document.querySelector('.resultado');

  // Array que vai ficar exibido no console do navegador.
  const pessoaFisica = [];

  form.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome');
    const telefone = form.querySelector('.telefone');
    const cpf = form.querySelector('.cpf');
    
    // Criei um objeto e já coloquei o push pra add no array pessoaFisica. Na linha 05
    pessoaFisica.push({
      nome: nome.value,
      telefone: telefone.value,
      cpf: cpf.value,
    })

    // Exibindo o resultado na tela do meu navegador com innerHTML.
    resultados.innerHTML += `<h3> Nome: ${nome.value} | Telefone: ${telefone.value} | CPF: ${cpf.value} </h3>`;

    // Exibindo o array com um objeto dentro, criado na linha 15.
    console.log(pessoaFisica)
  });
};

// Chamando a função.
exibirResultado();