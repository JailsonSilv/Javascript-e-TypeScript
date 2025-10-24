// FUNÇÃO CRIA PESSOAS 
function criaPessoa(nome, sobrenome, idade,){
  return{ nome, sobrenome, idade };
};


const pessoa1 = criaPessoa('Lucas', 'Silva', 45);
const pessoa2 = criaPessoa('Xabi', 'Alves', 20);
const pessoa3 = criaPessoa('Marcos', 'Pereira', 50);
const pessoa4 = criaPessoa('João', 'Silva', 35);
const pessoa5 = criaPessoa('Gabriel', 'Souza', 25);

//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

//Objeto...

const pessoa01 = {
  nome: 'Jailson',
  sobrenome: 'Silva',
  idade: 23,

  jailsonFala() {
    console.log(`Eu ${this.nome} tenho ${this.idade} anos.`);
    console.log(`E vou fazer ${this.idade} anos, no proximo ano.`)
  },

  proxAniversario() {
    this.idade++;
  }
}

pessoa01.jailsonFala();
pessoa01.proxAniversario();
pessoa01.jailsonFala();


function criapessoa01(nome, idade, sexo) {
  return{
    nome,
    idade,
    sexo,
  }
}

const pessoa001 = criapessoa01("Gabi", "Barbosa" , "");
console.log(pessoa001)