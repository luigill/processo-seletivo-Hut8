let salarioCLT = 5000;
let salarioPJ = 5000;

let ferias = 2000;
let decimoTerceiro = salarioCLT;
salarioCLT = salarioCLT + 700 + salarioCLT * 0.08;
salarioCLT = salarioCLT * 12;
salarioCLT = salarioCLT + ferias + decimoTerceiro;
salarioPJ = salarioPJ * 12;

if (salarioCLT >= salarioPJ) {
  console.log(salarioCLT);
  console.log('Melhor escolher CLT!');
} else {
  console.log(salarioPJ);
  console.log('A oferta PJ vale a pena!');
}
