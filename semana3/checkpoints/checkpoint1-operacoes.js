const soma = (valueOne, valueTwo) => valueOne + valueTwo;
const subtrai = (valueOne, valueTwo) => valueOne - valueTwo;
const multiplica = (valueOne, valueTwo) => valueOne * valueTwo;
const divide = (valueOne, valueTwo) => valueOne / valueTwo;

const realizaOp = (string, valueOne, valueTwo) => string(valueOne, valueTwo);

console.log(realizaOp(soma, 10, 3));
console.log(realizaOp(subtrai, 10, 3));
console.log(realizaOp(multiplica, 10, 3));
console.log(realizaOp(divide, 10, 2));
