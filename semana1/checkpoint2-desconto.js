// Elabore um algoritmo que calcule o que deve ser pago por um produto,considerando o preço normal de etiqueta e a escolha da condição de pagamento.
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamentoescolhida e efetuar o cálculo adequado, imprimindo o valor final no console.
// Código
// Condição de pagamento :
// 1 - À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 - À vista no cartão de crédito, recebe 15% de desconto
// 3 - Em duas vezes, preço normal de etiqueta sem juros
// 4 - Em três vezes, preço normal de etiqueta mais juros de 10%

let precoProduto = 100;
let opcaoPagamento = 4;

switch (opcaoPagamento) {
  case 1:
    console.log("Pagamento à vista em dinheiro ou cheque.");
    console.log("Desconto de 10%!");
    console.log("Valor total: " + (precoProduto * 0.9).toFixed(2) + "R$");
    break;
  case 2:
    console.log("Pagamento à vista no cartão de crédito.");
    console.log("Desconto de 15%!");
    console.log("Valor total: " + (precoProduto * 0.85).toFixed(2) + "R$");
    break;
  case 3:
    console.log("Pagamento em duas vezes no cartão.");
    console.log("Valor original do produto.");
    console.log("Valor total: " + precoProduto.toFixed(2) + "R$");
    console.log(
      "Valor de cada parcela: " + (precoProduto / 2).toFixed(2) + "R$"
    );
    break;
  case 4:
    console.log("Pagamento em três vezes no cartão.");
    console.log("Valor original do produto mais 10% de juros...");
    console.log("Valor total: " + (precoProduto * 1.1).toFixed(2) + "R$");
    console.log(
      "Valor de cada parcela: " + ((precoProduto * 1.1) / 3).toFixed(2) + "R$"
    );
    break;
  default:
    break;
}
