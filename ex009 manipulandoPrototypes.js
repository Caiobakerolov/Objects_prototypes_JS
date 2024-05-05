function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

// literal
const p1 = new Produto('Camiseta', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype);

p1.aumento(10);
p2.aumento(10);
console.log(p1);
console.log(p2);


const p3 = Object.create(Produto.prototype);
p3.nome = 'Xicara';
p3.preco = 13;
p3.aumento(10);
console.log(p3);