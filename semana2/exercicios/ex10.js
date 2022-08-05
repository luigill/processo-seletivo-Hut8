//imprime a media de um array

let arrayNotas = [6, 8, 7];
let somaNotas = 0;
let numeroNotas = arrayNotas.length;

for (let index = 0; index < arrayNotas.length; index++) {
  somaNotas = somaNotas + arrayNotas[index];
}

somaNotas = somaNotas / numeroNotas;
console.log(somaNotas);
