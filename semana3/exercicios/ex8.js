//Dado um array de números, faça um programa que encontre o menor e o maior
//elemento deste array e sua posição.

let array = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];

const encontraMenor = array => {
  let menor = array[0];
  let posicao = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < menor) {
      menor = array[index];
      posicao = index;
    }
  }
  console.log(`Menor valor: ${menor}`);
  console.log(`Posição: ${posicao}`);
};

const encontraMaior = array => {
  let maior = array[0];
  let posicao = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > maior) {
      maior = array[index];
      posicao = index;
    }
  }
  console.log(`Maior valor: ${maior}`);
  console.log(`Posição: ${posicao}`);
};

encontraMaior(array);
encontraMenor(array);
