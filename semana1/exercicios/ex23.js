//recebe valor em segundos e formata para hh:mm:ss

let valorSegundos = 33567;
let horas;
let minutos;
let segundos;

horas = valorSegundos / 3600;
minutos = (valorSegundos % 3600) / 60;
segundos = (valorSegundos % 3600) % 60;

console.log(
  horas.toFixed() + ':' + minutos.toFixed() + ':' + segundos.toFixed()
);
