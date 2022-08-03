//Imprima no console a soma dos elementos de um array, sendo cada um deles
// multiplicado pelo seu indice.

let array = [5, 9, 10, 6];
let somatorio = 0;

for (let index = 0; index < array.length; index++) {
  let mult = array[index] * index;
  somatorio = somatorio + mult;
}

console.log(somatorio);
