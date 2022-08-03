//Imprima no console todas as skills que cada usuário tem

const users = [
  {
    name: 'Joao',
    skills: ['Javascript', 'ReactJS', 'Redux']
  },
  {
    name: 'Pedro',
    skills: ['VueJS', 'Ruby on Rails', 'Elixir']
  }
];

for (let index = 0; index < users.length; index++) {
  console.log('Nome do usuário: ' + users[index].name);
  console.log(users[index].skills);
}
