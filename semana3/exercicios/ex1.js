//Pegue um valor de entrada e calcule o menor número de notas possíveis
// no qual o valor pode ser decomposto.

let saque = 576;
let contaNotas = {
  cem: 0,
  cinquenta: 0,
  vinte: 0,
  dez: 0,
  cinco: 0,
  dois: 0,
  um: 0
};

if (saque != 0) {
  while (saque >= 100) {
    contaNotas.cem++;
    saque = saque - 100;
  }
  while (saque >= 50) {
    contaNotas.cinquenta++;
    saque = saque - 50;
  }
  while (saque >= 20) {
    contaNotas.vinte++;
    saque = saque - 20;
  }
  while (saque >= 10) {
    contaNotas.dez++;
    saque = saque - 10;
  }
  while (saque >= 5) {
    contaNotas.cinco++;
    saque = saque - 5;
  }
  while (saque >= 2) {
    contaNotas.dois++;
    saque = saque - 2;
  }
  while (saque >= 1) {
    contaNotas.um++;
    saque = saque - 1;
  }
}

console.log(contaNotas.cem + ' notas de R$100,00 ');
console.log(contaNotas.cinquenta + ' notas de R$50,00');
console.log(contaNotas.vinte + ' notas de R$20,00');
console.log(contaNotas.dez + ' notas de R$10,00');
console.log(contaNotas.cinco + ' notas de R$5,00');
console.log(contaNotas.dois + ' notas de R$2,00');
console.log(contaNotas.um + ' notas de R$1,00 ');
