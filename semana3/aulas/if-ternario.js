let idade = 22;

//if ternário

idade >= 18
  ? console.log('É maior de idade!')
  : console.log('É menor de idade...');

//console.log(idade >= 18 ? 'É maior de idade!' : 'É menor de idade...');

//Exemplo Festa
let vip = true;

//se for vip, bebida é R$50
//se não for vip, bebida é R$100
let price = vip ? 50 : 100;
console.log(price);

//if ternário encadeado
//não é usual
let escolha = 'C';
console.log(
  'A escolha foi: ' +
    (escolha == 'A'
      ? 'A'
      : escolha == 'B'
      ? 'B'
      : escolha == 'C'
      ? 'C'
      : 'Erro')
);
