// defineProperty -> getter e Setters

function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // posso apagar ou nao a chave ou posso reconfigurar ou nao a chave no caso a ESTOQUE!!!
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if(typeof valor !== 'number') {
        console.log('aqui e uma string');
        return;
      }
      estoquePrivado = valor;
    }
  });
}

const p1 = new produto('Camiseta', 20, 3);
// console.log(p1);
p1.estoque = 'O valor que eu quero';
console.log(p1.estoque);