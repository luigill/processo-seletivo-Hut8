let valorEntrada = 576;
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let notas1 = 0;

if (valorEntrada != 0) {
  while (valorEntrada >= 100) {
    notas100++;
    valorEntrada = valorEntrada - 100;
  }
  while (valorEntrada >= 50) {
    notas50++;
    valorEntrada = valorEntrada - 50;
  }
  while (valorEntrada >= 20) {
    notas20++;
    valorEntrada = valorEntrada - 20;
  }
  while (valorEntrada >= 10) {
    notas10++;
    valorEntrada = valorEntrada - 10;
  }
  while (valorEntrada >= 5) {
    notas5++;
    valorEntrada = valorEntrada - 5;
  }
  while (valorEntrada >= 2) {
    notas2++;
    valorEntrada = valorEntrada - 2;
  }
  while (valorEntrada >= 1) {
    notas1++;
    valorEntrada = valorEntrada - 1;
  }
}

console.log(notas100 + ' notas de R$100,00 ');
console.log(notas50 + ' notas de R$50,00');
console.log(notas20 + ' notas de R$20,00');
console.log(notas10 + ' notas de R$10,00');
console.log(notas5 + ' notas de R$5,00');
console.log(notas2 + ' notas de R$2,00');
console.log(notas1 + ' notas de R$1,00 ');
