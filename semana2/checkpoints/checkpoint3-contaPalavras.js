let frase = 'Senhor dos Anéis Retorno do Rei';
let separador = ' ';

contaPalavras(frase, separador);

function contaPalavras(frase, separador) {
  let arrayString = frase.split(separador);
  console.log('A frase tem ' + arrayString.length + ' palavras.');
}
