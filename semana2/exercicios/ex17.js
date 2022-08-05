//Imprime na mesma linha se pessoas são dev
let arrayObject = [
  { name: 'Marilia', age: '26', job: 'Dev' },
  { name: 'Juca', age: '21', job: 'RH' },
  { name: 'Flavia', age: '30', job: 'Financeiro' },
  { name: 'Sérgio', age: '24', job: 'Dev' }
];

let saida = '';

for (let index = 0; index < arrayObject.length; index++) {
  if (arrayObject[index].job == 'Dev') {
    saida = saida + `${arrayObject[index].name} é dev.`;
  } else {
    saida = saida + `${arrayObject[index].name} não é dev.`;
  }
}

console.log(saida);
