//Recebe a hora inicial e final de um jogo.
//Calcule a duração do jogo.
//O jogo pode começar num dia e terminar em outro, tendo uma duração máxima de 24h.

let horaComeco = 22;
let horaFinal = 6;
let duracaoJogo;

if (horaComeco > horaFinal) {
  duracaoJogo = 24 - (horaComeco - horaFinal);
  console.log('O jogo durou: ' + duracaoJogo + ' horas.');
} else if (horaFinal > horaComeco) {
  duracaoJogo = horaFinal - horaComeco;
  console.log('O jogo durou: ' + duracaoJogo + ' horas.');
} else {
  console.log('O jogo durou: ' + 24 + ' horas.');
}
