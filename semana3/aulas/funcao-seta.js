//Função Anônima (não possui nome)
//Por que está dentro de uma const?
//Não faz sentido mudar o valor de uma variável que armazena uma função
//Recurso mais atualizado do JS

const sum = function (valueOne, valueTwo) {
  return valueOne + valueTwo;
};

//console.log(sum); //retorna [Function: sum]
//console.log(sum(10, 20)); //retorna a soma normalmente

//Arrow Function
// const somar = (valueOne, valueTwo) => {
// return valueOne + valueTwo;
// };

//Arrow Function com retorno implícito
const somar = (valueOne, valueTwo) => valueOne + valueTwo;
console.log(somar(14, 12));

const maiorIdade = idade => idade >= 18;
if (maiorIdade(19)) {
  console.log('É maior de idade.');
} else {
  console.log('É menor de idade...');
}

//Função como retorno
//Não utilizar dessa maneira
//Importante é saber que existe
//Vai fazer sentido quando chegar em React
function somando(numberOne) {
  return function (numberTwo) {
    return numberOne + numberTwo;
  };
}

console.log(somando(5)(3));
