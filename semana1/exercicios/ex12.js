//Banco vai liberar linha de crédito só para servidores públicos.
//Caso o servidor seja um professor, ele terá uma linha com juros menores.
//Entreda:
//Nome Completo (String)
//Servidor (boolean)
//Professor (boolean)

// let nomeCompleto = 'Juca da Silva';
// let servidor = false;
// let professor = true;

let nomeCompleto = 'Márcia dos Santos';
let servidor = true;
let professor = true;
//let professor = false;

if (servidor == false) {
  console.log(
    nomeCompleto +
      ' ,infelizmente você não possui uma linha de crédito disponível...'
  );
} else if (servidor == true && professor == true) {
  console.log(
    'Parabéns ' +
      nomeCompleto +
      ', você possui acesso a nossa linha de crédito especial!'
  );
} else {
  console.log(
    nomeCompleto + ' ,você tem acesso a nossa linha de crédito para servidores.'
  );
}
