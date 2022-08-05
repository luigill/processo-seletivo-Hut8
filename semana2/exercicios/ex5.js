//imprime somente os números positivos
let arrayNumeros = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

for (let index = 0; index < arrayNumeros.length; index++) {
  if (arrayNumeros[index] > 0) {
    console.log(arrayNumeros[index]);
  }
}
