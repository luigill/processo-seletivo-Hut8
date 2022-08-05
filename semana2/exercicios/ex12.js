//retorna o menor número e sua posição no array
let arrayNumeros = [1, 2, 3, 4, -5, 6, 7, 8, 9, 10];
let menorNumero = arrayNumeros[0];
let posicao = 0;

for (let index = 0; index < arrayNumeros.length; index++) {
  if (arrayNumeros[index] < menorNumero) {
    menorNumero = arrayNumeros[index];
    posicao = index;
  }
}

console.log(`Menor Valor: ${menorNumero}`);
console.log(`Posição: ${posicao}`);
