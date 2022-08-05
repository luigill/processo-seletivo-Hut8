//pesquisa um nome no array

let arrayNomes = [
  'Juliana',
  'Pedro',
  'Regina',
  'Carla',
  'João',
  'Patrícia',
  'Gabriel',
  'Carlos'
];

let nomePesquisa = 'João';

for (let index = 0; index < arrayNomes.length; index++) {
  if (arrayNomes[index] == nomePesquisa) {
    console.log(`O nome ${nomePesquisa} existe no array.`);
    break;
  }
}
