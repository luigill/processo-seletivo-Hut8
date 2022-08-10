let user = {
  name: 'Juca',
  idade: 28
};

const maiorIdade = object =>
  object.idade < 18
    ? console.log('Menor de idade...')
    : console.log('É maior de idade!');

maiorIdade(user);
