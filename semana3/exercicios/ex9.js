//imprime soma de lista de compras

let listaCompras = [
  { nome: 'maçã', quantidade: 2, valor: 0.5 },
  { nome: 'alface', quantidade: 1, valor: 1.73 },
  { nome: 'água 5L', quantidade: 2, valor: 5.99 },
  { nome: 'Pão Francês', quantidade: 8, valor: 0.63 }
];

const somaListaCompras = object => {
  let valorTotal = 0;
  for (let index = 0; index < object.length; index++) {
    valorTotal = valorTotal + object[index].quantidade * object[index].valor;
  }
  console.log(`R$ ${valorTotal}`);
};

somaListaCompras(listaCompras);
