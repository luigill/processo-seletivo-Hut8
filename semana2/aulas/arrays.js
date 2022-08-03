//Array

//Um novo array de 10 elementos (números)
let arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Criação de um Array de Números
let arrayTurma = ['Lui', 'João', 'Maria', 'José']; //Criação um Array de Strings

//Mostrar todas as informações que estão armazenadas no array
console.log(arrayValues);
console.log(arrayTurma);

//Arrays começam em 0 e vão até length-1
console.log(arrayValues[0]); // Mostra o valor -> 1
console.log(arrayValues[9]); // Mostra o valor -> 10
console.log(arrayValues.length); // Mostra o tamanho do Array

//Modificar o valor da primeira posição
arrayValues[0] = 1200;
console.log(arrayValues);
