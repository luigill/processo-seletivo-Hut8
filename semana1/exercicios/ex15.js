//Ordem Crescente

let valor1 = 10;
let valor2 = 25;
let valor3 = 20;

//valor 3 menor
if (valor3 < valor1 && valor3 < valor2) {
  if (valor1 > valor2) {
    console.log(valor1 + '>' + valor2 + '>' + valor3);
  } else {
    console.log(valor2 + '>' + valor1 + '>' + valor3);
  }
  // valor 2 menor
} else if (valor2 < valor1 && valor2 < valor3) {
  if (valor1 > valor3) {
    console.log(valor1 + '>' + valor3 + '>' + valor2);
  } else {
    console.log(valor3 + '>' + valor1 + '>' + valor2);
  }
}
//valor 1 menor
else {
  if (valor2 > valor3) {
    console.log(valor2 + '>' + valor3 + '>' + valor1);
  } else {
    console.log(valor3 + '>' + valor2 + '>' + valor1);
  }
}
