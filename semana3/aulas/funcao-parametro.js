//Função sendo passada como parâmetro
//Chamada também de callback function

const mostraSoma = (soma, mostra) => {
  mostra(soma);
};

const mostra = value => console.log(value);

mostraSoma(10 + 30, mostra);

//Array de Funções
const soma = (valueOne, valueTwo) => valueOne + valueTwo;
const subtrai = (valueOne, valueTwo) => valueOne - valueTwo;
const multiplica = (valueOne, valueTwo) => valueOne * valueTwo;
const divide = (valueOne, valueTwo) => valueOne / valueTwo;

const arrayOperacoes = [soma, subtrai, multiplica, divide];
console.log(arrayOperacoes);
console.log(arrayOperacoes[0](10, 20));

const objectOperacoes = {
  soma: soma,
  subtrai: subtrai,
  multiplica: multiplica,
  divide: divide
};

//chamada array
console.log(arrayOperacoes[0](10, 10));
//chamada objeto
console.log(objectOperacoes.soma(10, 10));
console.log(objectOperacoes['soma'](10, 10));
