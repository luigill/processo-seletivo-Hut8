//Crie uma função que mostre o maior número de um array

let array1 = [50, 1, 100, 2, 3, 10, 4, 5, 6];
mostraMaior(array1);

function mostraMaior(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= maior) {
      maior = array[index];
    }
  }
  console.log(maior);
}
