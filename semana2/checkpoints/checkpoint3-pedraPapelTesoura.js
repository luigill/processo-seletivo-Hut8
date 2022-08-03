let opcoes = ['Tesoura', 'Papel', 'Pedra'];

let usuario1 = opcoes[Math.floor(Math.random() * opcoes.length)];
let usuario2 = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log('Usuário 1 escolheu: ' + usuario1);
console.log('Usuário 2 escolheu: ' + usuario2);

rockPaperScissorsWinner(usuario1, usuario2);

function rockPaperScissorsWinner(valor1, valor2) {
  if (usuario1 == 'Tesoura') {
    if (usuario2 == 'Tesoura') {
      console.log('Empate!');
    } else if (usuario2 == 'Papel') {
      console.log('Usuário 1 ganhou!');
    } else if (usuario2 == 'Pedra') {
      console.log('Usuário 2 ganhou!');
    }
  } else if (usuario1 == 'Papel') {
    if (usuario2 == 'Tesoura') {
      console.log('Usuário 2 ganhou!');
    } else if (usuario2 == 'Papel') {
      console.log('Empate!');
    } else if (usuario2 == 'Pedra') {
      console.log('Usuário 1 ganhou!');
    }
  } else if (usuario1 == 'Pedra') {
    if (usuario2 == 'Tesoura') {
      console.log('Usuário 1 ganhou!');
    } else if (usuario2 == 'Papel') {
      console.log('Usuário 2 ganhou!');
    } else if (usuario2 == 'Pedra') {
      console.log('Empate!');
    }
  }
}
