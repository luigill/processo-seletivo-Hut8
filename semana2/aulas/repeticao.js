//Comando de Repetição For
//for(valor_inicial ; comparação_realizada ; contagem)

//Value sendo desconhecido após o For
for (let value = 0; value <= 10; value++) {
  console.log(value);
}

//console.log(value); -> não está no escopo
//value foi definida somente dentro do for

//Value sendo identificado após o For
let value = 0;
for (value = 0; value <= 101; value++) {
  console.log(value);
}

console.log(value);

//Padrão de utilização no For (É comum encontrar)
// for(let i=0;i<=10;i++)
// for(let index=0;index<=10;index++)
