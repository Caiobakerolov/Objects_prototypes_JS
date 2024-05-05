const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio'
};

const chave = 'nome';

console.log(pessoa['nome']);
console.log(pessoa.sobrenome);
console.log(pessoa[chave]);

console.log('-----------------------');

const pessoa1 = new Object();
pessoa1.nome = 'luiz';
pessoa1.sobrenome = 'otavio';

const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Otavio'
};

console.log(pessoa1, pessoa2);

console.log('-----------------------');

const pessoa3 = new Object();
pessoa3.nome = 'luiz';
pessoa3.sobrenome = 'otavio';

delete pessoa3.nome;
console.log(pessoa3);

console.log('-----------------------');

const pessoa4 = new Object();
pessoa4.nome = 'luiz';
pessoa4.sobrenome = 'otavio';
pessoa4.idade = 31;
pessoa4.falarNome = function() {
  console.log(`${this.nome} esta falando seu nome.`);
}

pessoa4.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa4.getDataNascimento());

console.log('-----------------------');

const pessoa5 = new Object();
pessoa5.nome = 'luiz';
pessoa5.sobrenome = 'otavio';
pessoa5.idade = 2;
pessoa5.falarNome = function() {
  console.log(`${this.nome} esta falando seu nome.`);
}

pessoa5.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa5) {
  console.log(pessoa5[chave]);
}

console.log('-----------------------');

// Factory functions 

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

console.log('-----------------------');

// constructor functions / classes
function Pessoa6(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // return this; {} retorna vazio . . . mais no caso abaixo ja preenchemos o this com o nome e sobre nome que ira retorna alguma coisa
  Object.freeze(this); // aqui no caso ele travou o objeto para que o objeto nao possa ser alterado e nem deletado, se o parametro for passado antes desse fresse ele sera alterado ou deletado
}

// {} <- this
const p6 = new Pessoa6('Luiz', 'Miranda');

p6.nome = 'Outra Coisa'; // neste caso ele nao esta alterando porque o Object.freeze(this) acima esta inpedindo a alteracao
p6.sobrenome = 'Qualquer coisa'; // neste caso ele nao esta alterando porque o Object.freeze(this) acima esta inpedindo a alteracao
delete p6.nome; // neste caso ele nao esta deletando porque o Object.freeze(this) acima esta inpedindo de ser deletado
const p7 = new Pessoa6('Maria', 'Miranda');
console.log(p6);
console.log(p7);