//Objeto

//Um objeto em JS é um tipo de dado que possui pares chave:valor.
//Podemos ver um objeto como o representante de uma estrutura;
//Como um usuário, que tem as propriedades: nome, idade, ...
//Como um carro, que tem as propriedades: marca, modelo, ...

let garrafa = {
  tampa: 'verde',
  conteudo: 'água',
  volume: '500ml',
  material: 'plastico',
  formato: 'cilindrico',
  cor: 'transparente',
  reciclavel: true,
  'data de validade': '23/03/2024'
};

//Mostrando valores de um objeto
console.log(garrafa);
console.log(garrafa.volume);
console.log(garrafa.formato);
console.log(garrafa.reciclavel);
console.log(garrafa['data de validade']);

//Pegando um valor a partir de uma propriedade armazenada em uma string
let tampa = 'tampa';
console.log(garrafa[tampa]);
console.log(garrafa['tampa']);

let historicoUsuario = {
  nome: 'Lui',
  'datas de acesso': ['01/08/2022', '02/08/2022', '03/08/2022']
};

console.log(historicoUsuario);
console.log(historicoUsuario['datas de acesso']);
console.log(historicoUsuario['datas de acesso'][0]);
console.log(historicoUsuario['datas de acesso'].length);

//objeto dentro de objeto
let dev = {
  name: 'Lui Dev',
  cargo: 'front-end',
  projeto: {
    'data de criação': '03/08/2022',
    linguagens: ['JS', 'Python', 'C']
  }
};

console.log(dev);
//Mudando o valor de uma propriedade dentro de um objeto
dev.projeto['data de criação'] = '22/08/2022';
console.log(dev);

//Criando um array de objetos
let arrayPessoas = [
  { name: 'Lui', nascimento: '18/12/2000' },
  { name: 'Lorena', nascimento: '20/12/1967' }
];
console.log(arrayPessoas);
console.log(arrayPessoas[0].nascimento);

//Adicionando propriedades no objeto de forma dinâmica
let newProp = 'nascimento';
let valorProp = '18/12/2000';
let user = {
  name: 'Lui'
};
user[newProp] = valorProp;
console.log(user[newProp]);
console.log(user);

//Deletando propriedades
delete user.newProp;
console.log(user);
