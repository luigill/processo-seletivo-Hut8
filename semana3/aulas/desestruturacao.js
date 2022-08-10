//Destructuring Assignment

//Forma usual de se trabalhar objetos
const user = {
  nome: 'Lui',
  idade: '21',
  cpf: 22323,
  cnh: 'B',
  historicoEscolar: { historia: 10, geografia: 8, portugues: 6 }
};
console.log(user.nome);
console.log(user.idade);

//Desestruturação
const { nome, idade } = user;
console.log(nome);
console.log(idade);

//Desestruturação com variável mudando de nome
const { nome: nomeUsuario } = user;
console.log(nomeUsuario);

const { historicoEscolar } = user;
console.log(historicoEscolar);

const {
  historicoEscolar: { historia }
} = user;
console.log(historia);

//Desestruturaçao de Array
const names = ['João', 'Maria', 'José', 'Matheus'];
const [primeiroNome, segundoNome, , quartoName] = names;
console.log(primeiroNome);
console.log(segundoNome);
console.log(quartoName);

const getName = ({ nome }) => nome;
console.log(getName(user));

//trocas de valores de uma variável para outra via desestruturação
let valueOne = 50;
let valueTwo = 70;
console.log('Valor 1: ' + valueOne);
console.log('Valor 2: ' + valueTwo);

[valueOne, valueTwo] = [valueTwo, valueOne];

console.log('Valor 1: ' + valueOne);
console.log('Valor 2: ' + valueTwo);
