let valorMulti = 12;

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7];

const multiValor = (valorUm, valorDois) => valorUm * valorDois;

for (let index = 0; index < arrayNumeros.length; index++) {
  console.log(multiValor(arrayNumeros[index], valorMulti));
}
