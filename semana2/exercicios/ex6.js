//conta num array quantos elementos são: pares,ímpares,positivos e negativos
let arrayNumeros = [-5, 0, -3, -4, 12];
let countPar = 0;
let countImpar = 0;
let countPos = 0;
let countNeg = 0;

for (let index = 0; index < arrayNumeros.length; index++) {
  if (arrayNumeros[index] % 2 == 0) {
    countPar++;
  } else {
    countImpar++;
  }
  if (arrayNumeros[index] > 0) {
    countPos++;
  } else if (arrayNumeros[index] < 0) {
    countNeg++;
  }
}

console.log(`${countPar} valor(es) par(es).`);
console.log(`${countImpar} valor(es) ímpar(es).`);
console.log(`${countPos} valor(es) positivo(s).`);
console.log(`${countNeg} valor(es) negativo(s).`);
