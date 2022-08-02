let valorMensalDesejado = 5000;
let horasTrabalhadas = 160;
let valorTotalRecebido = valorMensalDesejado * 2;

let custoTotal = custoProjeto(300);
console.log('Valor total do projeto: R$' + custoTotal);

function custoProjeto(tempoProjeto) {
  let mesesProjeto = tempoProjeto / horasTrabalhadas;
  console.log('O projeto terá ' + mesesProjeto + ' meses de duração.');
  let custoProjeto = valorMensalDesejado * mesesProjeto;
  return custoProjeto;
}
