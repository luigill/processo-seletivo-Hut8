//Uma imobiliária paga os corretores um salário fixo por mês e uma comissão de acordo
//com o valor de vendas realizado por elas. Faça um programa que calcule e
//imprima no console o valor total recebido pelo corretor no mês.
//Entrada:
//Salário Fixo
//Valor total vendido
//Porcentagem da comissão

let salarioFixo = 5000;
let valorTotalVendido = 100000;
let porcentagem = 10; //4% em cima do valor total vendido

console.log(
  'Valor Mensal: R$ ' + (salarioFixo + valorTotalVendido * (porcentagem / 100))
);
