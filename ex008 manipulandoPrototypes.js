// new Object -> Object.prototype

const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  chaveB: 'B'
  // __proto__: ObjA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);