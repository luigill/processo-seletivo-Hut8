let user = {
  name: 'Juca',
  idade: 28
};

//exemplo usando destructuring
//const { idade } = user;

const maiorIdade = object =>
  //idade < 18
  object.idade < 18
    ? console.log('Menor de idade...')
    : console.log('É maior de idade!');

maiorIdade(user);
//maiorIdade(idade);
