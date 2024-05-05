const produto = {nome: 'escova', preco: 1.81};
const outraCoisa = {...produto, material: 'Porcelana'};

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);


console.log('-------------------------------');


const produto1 = {nome: 'shampoo', preco: 2.81};
const caneca = Object.assign({}, produto1, {material: 'variavel'});

caneca.nome = 'Outro coisinha';
caneca.preco = 1.5;
console.log(produto1);
console.log(caneca);


console.log('-------------------------------');


const produto2 = {nome: 'condicionador', preco: 4.81};
const caneca1 = { nome: produto.nome, preco: produto.preco };

caneca1.nome = 'Outra variavel';
caneca1.preco = 3.5;
console.log(produto2);
console.log(caneca1);


console.log('-------------------------------');


const produto3 = {nome: 'hidratacao', preco: 7.45 };
Object.defineProperty(produto3, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
console.log(produto3);


console.log('-------------------------------');


const produto4 = {nome: 'pintura', preco: 5.23 };
console.log(Object.values(produto4));


console.log('-------------------------------');


const produto5 = {nome: 'pintura', preco: 5.23, material: 'liquido'};
console.log(Object.entries(produto5));


console.log('-------------------------------');


const produto6 = {nome: 'tinta', preco: 10.62, material: 'liquido', color: 'Loiro'};

// for(let entry of Object.entries(produto6)) {
//   console.log(entry);
// }

for(let [chave, valor] of Object.entries(produto6)) {
  console.log(chave, valor);
}