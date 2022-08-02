let salarioTotal = 33000;

if (salarioTotal < 21453.24) {
  console.log('Não é necessário pagar imposto!');
} else if (salarioTotal > 21453.25 && salarioTotal < 32151.48) {
  console.log('É necessário pagar: R$' + salarioTotal * 0.075);
} else if (salarioTotal > 32151.49 && salarioTotal < 42869.16) {
  console.log('É necessário pagar: R$' + salarioTotal * 0.15);
} else if (salarioTotal > 42869.17 && salarioTotal < 53656.72) {
  console.log('É necessário pagar: R$' + salarioTotal * 0.225);
} else if (salarioTotal > 53565.72) {
  console.log('É necessário pagar: R$' + salarioTotal * 0.275);
}
