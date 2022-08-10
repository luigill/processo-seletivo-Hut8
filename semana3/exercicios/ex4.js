//Imprime a tabuada do 1 ao 10

let valor = 5;

for (let index = 1; index <= 10; index++) {
  const mult = valor => index * valor;
  console.log(`${index} x ${valor} = ${mult(valor)} `);
}
