function categoria(idade) {
  if (idade > 4 && idade <= 6) return console.log("Infantil A");
  else if (idade > 7 && idade <= 10) return console.log("Infantil B");
  else if (idade > 10 && idade <= 13) return console.log("Juvenil A");
  else if (idade > 13 && idade <= 17) return console.log("Juvenil B");
  else if (idade >= 18) return console.log("Adulto");
  else return console.log("Idade sem categoria...");
}

let idadeNadador = 21;

categoria(idadeNadador);
