let arrayObjects = [
  { nome: 'João', idade: 30, salario: 15000, senioridade: 'senior' },
  { nome: 'Pedro', idade: 22, salario: 10000, senioridade: 'pleno' },
  { nome: 'Carla', idade: 27, salario: 1500, senioridade: 'estagio' },
  { nome: 'Lucas', idade: 35, salario: 15000, senioridade: 'senior' },
  { nome: 'Roberta', idade: 45, salario: 5000, senioridade: 'junior' },
  { nome: 'Patrícia', idade: 19, salario: 10000, senioridade: 'pleno' },
  { nome: 'Joana', idade: 23, salario: 5000, senioridade: 'junior' }
];

arrayObjects.sort(function (a, b) {
  return a.idade > b.idade;
});

console.log(arrayObjects);

const comparaIdade = () => {};

// const ordenaCrescenteIdade = arrayObjeto => {
//   arrayObjeto.sort(function (a, b) {
//     return a.idade < b.idade;
//   });
// };
// const ordenaDecrescenteIdade = arrayObjeto => {};
// const ordenaCrescenteSalario = arrayObjeto => {};
// const ordenaDecrescenteSalario = arrayObjeto => {};
// const ordenaCrescenteSenioridade = arrayObjeto => {};
// const ordenaDecrescenteSenioridade = arrayObjeto => {};

// console.log(ordenaCrescenteIdade(arrayObjects));
