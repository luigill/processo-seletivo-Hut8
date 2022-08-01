//Recebe 3 valores de entrada e
//e mostra no console a soma dos dois maiores.

//1 e 2
// let valor1 = 30;
// let valor2 = 35;
// let valor3 = 20;

//2 e 3
// let valor1 = 10;
// let valor2 = 15;
// let valor3 = 20;

//1 e 3
let valor1 = 30;
let valor2 = 15;
let valor3 = 20;

if (valor1 < valor2 && valor1 < valor3) {
  console.log(valor2 + valor3);
} else if (valor2 < valor1 && valor2 < valor3) {
  console.log(valor1 + valor3);
} else if (valor3 < valor1 && valor3 < valor2) {
  console.log(valor1 + valor2);
}
