//Recebe 3 números
//Troca para:
//2 = 3
//3 = 1
//1 = 2

let valueOne = 1;
let valueTwo = 2;
let valueThree = 3;
let aux;

console.log('Valores Originais:');
console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);

aux = valueTwo;
valueTwo = valueThree;
valueThree = valueOne;
valueOne = aux;

console.log('Valores Trocados:');
console.log(valueOne);
console.log(valueTwo);
console.log(valueThree);

//
//
//            aux = 2
//   1 = aux = 2        2 = 3            3 = 1
//
