//Dado um array de números, faça um programa que imprima na tela
// os números positivos, negativos, pares, ímpares e conta quantos tem de cada

let arrayNumeros = [5, -12, 4422, -25, 42];

const mostraPos = array => {
  console.log('Números Positivos:');
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > 0) {
      console.log(array[index]);
      count++;
    }
  }
  console.log(`Números Positivos: ${count}`);
};

const mostraNeg = array => {
  console.log('Números Negativos:');
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
      console.log(array[index]);
      count++;
    }
  }
  console.log(`Números Negativos: ${count}`);
};

const mostraPar = array => {
  console.log('Números Pares:');
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      console.log(array[index]);
      count++;
    }
  }
  console.log(`Números Pares: ${count}`);
};

const mostraImp = array => {
  console.log('Números Ímpares:');
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 != 0) {
      console.log(array[index]);
      count++;
    }
  }
  console.log(`Números Ímpares: ${count}`);
};

mostraPos(arrayNumeros);
mostraNeg(arrayNumeros);
mostraPar(arrayNumeros);
mostraImp(arrayNumeros);
