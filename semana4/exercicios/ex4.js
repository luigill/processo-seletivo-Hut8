let arrayNotas = [6, 8, 7];

const fazMedia = arrayNotas.reduce((t, n) => n + t, 0) / arrayNotas.length;

console.log(fazMedia);
