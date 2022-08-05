//imprime os alunos que passaram
let arrayObjetos = [
  { nome: 'Marcos', notas: [10, 7, 2] },
  { nome: 'Michele', notas: [10, 10, 10] },
  { nome: 'Pedro', notas: [3, 10, 9] },
  { nome: 'Andressa', notas: [6, 6, 8] },
  { nome: 'Cristiana', notas: [7, 9, 2] }
];

for (let i = 0; i < arrayObjetos.length; i++) {
  let media = 0;
  for (let j = 0; j < arrayObjetos[i].notas.length; j++) {
    media = media + arrayObjetos[i].notas[j];
  }
  media = media / arrayObjetos[i].notas.length;
  if (media >= 7) {
    console.log(arrayObjetos[i].nome);
  }
}
