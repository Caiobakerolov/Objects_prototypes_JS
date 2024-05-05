// defineProperty 


function produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: false, // mostra a chave
    value: estoque, // valor da chave
    writable: false, // posso alterar ou nao o valor do estoque
    configurable: false // posso apagar ou nao a chave ou posso reconfigurar ou nao a chave no caso a ESTOQUE!!!
  });
}

const p1 = new produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
p1.estoque = 50000; // aqui so ira funcionar se o writable tiver como true
delete p1.estoque; // aqui so ira funcionar se o configurable tiver como true
// console.log(p1);

for(let chave in p1) {
  console.log(chave);
}