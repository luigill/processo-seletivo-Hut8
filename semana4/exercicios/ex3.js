let arrayNumeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const achaPositivos = arrayNumeros.filter(arrayNumeros => {
  return arrayNumeros > 0;
});

const achaNegativos = arrayNumeros.filter(arrayNumeros => {
  return arrayNumeros < 0;
});

const achaPares = arrayNumeros.filter(arrayNumeros => {
  return arrayNumeros % 2 == 0;
});

const achaImpares = arrayNumeros.filter(arrayNumeros => {
  return arrayNumeros % 2 != 0;
});

console.log(achaPositivos);
console.log(achaNegativos);
console.log(achaPares);
console.log(achaImpares);
