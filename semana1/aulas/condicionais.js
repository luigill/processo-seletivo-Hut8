//Comandos Condicionais

let saldo = 500;
let compras = 100;

//if else
if (saldo >= compras) {
  console.log('Compras Realizadas com Sucesso');
} else {
  console.log('Saldo Insuficiente');
}

//else if
let number = 0;
if (number > 0) {
  console.log('Positivo');
} else if (number < 0) {
  console.log('Negativo');
} else {
  console.log('Zero');
}

//Switch Case

//Menu
// 1 - Pizza Muito Pequena
// 2 - Pizza Pequena
// 3 - Pizza Média
// 4 - Pizza Grande
// 5 - Pizza Muito Grande
// Outro - Opção Inválida

let opcao = 1;
// let opcao = 10;

switch (opcao) {
  case 1:
    console.log('Pizza Muito Pequena');
    break;
  case 2:
    console.log('Pizza Pequena');
    break;
  case 3:
    console.log('Pizza Média');
    break;
  case 4:
    console.log('Pizza Grande');
    break;
  case 5:
    console.log('Pizza Muito Grande');
    break;
  default:
    console.log('Opção Inválida');
    break;
}
