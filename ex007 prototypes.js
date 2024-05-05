// construtora -> molde (classe)

// java script e baseado em prototipos para passar propriedades e metodos de um objeto para o outro. 

// definicao de prototipo: prototipo e o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras producoes.

// todos os objetos tem uma referencia interna para um prototipo (__proto__) que vem da propriedade prototype da funcao construtora que foi usada para cria-lo. quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos e usada ate o topo (null) ate encontrar (ou nao) tal membro

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => ' Original: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + ' ' + this.sobrenome;
};

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- pessoa = funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- pessoa = funcao construtora
const data = new Date(); // <- Date = funcao construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);