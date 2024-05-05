// defineProperties

function produto(nome, preco, estoque) {

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor da chave
      writable: true, // posso alterar ou nao o valor do estoque
      configurable: true // posso apagar ou nao a chave ou posso reconfigurar ou nao a chave no caso a ESTOQUE!!!
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor da chave
      writable: true, // posso alterar ou nao o valor do estoque
      configurable: true // posso apagar ou nao a chave ou posso reconfigurar ou nao a chave no caso a ESTOQUE!!!
    },

    estoque: {
      enumerable: true, // mostra a chave
      value: estoque, // valor da chave
      writable: true, // posso alterar ou nao o valor do estoque
      configurable: true // posso apagar ou nao a chave ou posso reconfigurar ou nao a chave no caso a ESTOQUE!!!

    },
    
  });

}

const p1 = new produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}
