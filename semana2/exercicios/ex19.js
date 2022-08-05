//substitui numeros por letras em strings

let arrayStrings = ['h3llo w0rld', 'w3b developer', '0tterw1s3', 'j4v4scr1pt'];

for (let index = 0; index < arrayStrings.length; index++) {
  arrayStrings[index] = arrayStrings[index]
    .replaceAll('1', 'i')
    .replaceAll('3', 'e')
    .replaceAll('4', 'a')
    .replaceAll('5', 's')
    .replaceAll('0', 'o')
    .replaceAll(' ', '');
}

console.log(arrayStrings);
