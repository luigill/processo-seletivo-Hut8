//Expressões Aritméticas
//Soma (+), subtração(-), multiplicação(*) e divisão(/)
//Resto (%), Potência (**)

//Variáveis:
let numberOne = 5;
let numberTwo = 10;
let pow2 = 2;

//Somar dois valores:
let soma = numberOne + numberTwo;

//Subtrair dois valores:
//Ordem dos fatores altera o resultado...
let subtracao = numberOne - numberTwo;
//let subtracao = numberTwo - numberOne;

//Multiplicar dois números:
let multi = numberOne * numberTwo;

//Dividir dois números:
//Ordem dos fatores altera o resultado...
let div = numberOne / numberTwo;

//Potência entre dois números:
let pow = numberOne ** pow2;

//Resto de uma divisão:
let rest = numberOne % pow2;

//Operação:
//() -> Prioridade máxima nos calcúlos
let op = 5 + 4 + 10 - (20 * 4) / 2 ** 2;

//Prints na tela:
//Operações matemáticas podem ser feitas diretamento no console.log
console.log(soma);
console.log(subtracao);
console.log(multi);
console.log(div);
console.log(pow);
console.log(rest);
console.log(op);
