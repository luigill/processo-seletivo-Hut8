let salarioCLT = 5000;
let salarioPJ = 25000;

let ferias = 2000;
let decimoTerceiro = salarioCLT;
salarioCLT = salarioCLT + 700 + salarioCLT * 0.08;
salarioCLT = salarioCLT * 12;
salarioCLT = salarioCLT + ferias + decimoTerceiro;
salarioPJ = salarioPJ * 12;

salarioCLT >= salarioPJ
  ? console.log('Melhor escolher a CLT!')
  : console.log('A oferta PJ vale a pena!');
