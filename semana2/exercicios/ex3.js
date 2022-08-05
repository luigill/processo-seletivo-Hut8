//imprime todos os nomes na mesma linha
let arrayNomes = ['Joao', 'Maria', 'Jose'];
let saida = '';
//console.log(arrayNomes.join(', '));

for (let index = 0; index < arrayNomes.length; index++) {
  saida = saida + `${arrayNomes[index]}, `;
}

saida = saida.slice(0, -2);
saida = saida + '.';

console.log(saida);
