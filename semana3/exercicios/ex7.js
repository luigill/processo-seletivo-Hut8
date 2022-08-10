//Crie um algoritmo que tem como entrada um array de notas e
//imprime no console a média aritmética

let arrayNotas = [10, 5, 9, 6, 7, 7];

const calculaMedia = array => {
  let soma = 0;
  for (let index = 0; index < array.length; index++) {
    soma = soma + array[index];
  }
  soma = soma / array.length;
  return soma;
};

let media = calculaMedia(arrayNotas);
console.log(media.toFixed());
