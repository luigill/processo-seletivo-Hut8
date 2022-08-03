let arrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Estrutura de um for
//for(inicializador; condição; expressão){
//bloco de código
//}

//Repetição mostrando os elementos de 0 até 14
for (let i = 0; i <= 14; i++) {
  console.log(arrayValues[i]);
}

///Utilizando o tamanho do array pela propriedade length
for (let i = 0; i < arrayValues.length; i++) {
  console.log(arrayValues[i]);
}

//Mostrar o meu array de trás pra frente
for (let i = arrayValues.length - 1; i >= 0; i--) {
  console.log(arrayValues[i]);
}
