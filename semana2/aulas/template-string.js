let valueOne = 5;
let valueTwo = 10;
let result = valueOne + valueTwo;

//Formato utilizando a concatenação
console.log(valueOne + ' + ' + valueTwo + ' = ' + result);

//Formato utilizando Template String
console.log(`${valueOne} + ${valueTwo} = ${result}`);

let nome = 'Lui';
let sobrenome = 'Gill';
let profissao = 'Estudante';
let idade = 26;

let mensagem = `Meu nome é ${nome}, meu sobrenome é ${sobrenome} e sou ${profissao}.`;
console.log(mensagem);

let user = {
  'name um': 'Lui',
  'name dois': 'Gill'
};
let stringTest = 'dois';
console.log(user[`name ${stringTest}`]);
