//Crie variáveis para armazenar algumas informações de cadastro de um estudante,são elas:
//nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota.
//A partir dessas informações, você devemostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data deNascimento e Média:

let nome = "Lui";
let sobrenome = "Gill";
let diaNascimento = 18;
let mesNascimento = 12;
let anoNascimento = 2000;
let primeiraNota = 8;
let segundaNota = 9;

console.log("Cadastro do estudante:");
console.log("Nome Completo: " + nome + " " + sobrenome);
console.log(
  "Idade: " + calculaIdade(diaNascimento, mesNascimento, anoNascimento)
);
console.log(
  "Data de Nascimento: " +
    diaNascimento +
    "/" +
    mesNascimento +
    "/" +
    anoNascimento
);
console.log("Média: " + calculaMediaSimples(primeiraNota, segundaNota));

function calculaIdade(diaNascimento, mesNascimento, anoNascimento) {
  let diaAtual = 28;
  let mesAtual = 7;
  let anoAtual = 2022;
  let idade;

  idade = anoAtual - anoNascimento;

  if (
    mesAtual < mesNascimento ||
    (mesAtual == mesNascimento && diaAtual < diaNascimento)
  ) {
    idade--;
  }

  return idade;
}

function calculaMediaSimples(a, b) {
  return (a + b) / 2;
}
