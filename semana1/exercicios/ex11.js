//Triângulo é equilátero, isósceles ou escaleno?

//Equilátero
let lado1 = 7;
let lado2 = 7;
let lado3 = 7;

//Isósceles
// let lado1 = 10;
// let lado2 = 5;
// let lado3 = 10;

//Escaleno
// let lado1 = 2;
// let lado2 = 1;
// let lado3 = 5;

if (lado1 == lado2 && lado2 == lado3) {
  console.log('O triângulo é equilátero.');
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
  console.log('O triângulo é isósceles');
} else {
  console.log('O triângulo é escaleno.');
}
