//formatar contato
let cadastro = {
  nome: 'analu dos santos baptista',
  cpf: '14776213931',
  telefone: '8328008258'
};

let nomeFormatado = formatNome(cadastro.nome);
let cpfFormatado = formatCpf(cadastro);
let telefoneFormatado = formatTelefone(cadastro);

console.log(nomeFormatado);
console.log(cpfFormatado);
console.log(telefoneFormatado);

function formatNome(string) {
  let format = cadastro.nome.split(' ');
  for (let index = 0; index < format.length; index++) {
    format[index] = format[index][0].toUpperCase() + format[index].substr(1);
  }
  format = format.join(' ');
  return format;
}

function formatCpf(string) {
  let cpf = cadastro.cpf.toString();
  return (
    cpf.slice(0, 3) +
    '.' +
    cpf.slice(3, 6) +
    '.' +
    cpf.slice(6, 9) +
    '-' +
    cpf.slice(9, 11)
  );
}

function formatTelefone(string) {
  let telefone = cadastro.telefone.toString();
  return (
    '(' +
    telefone.slice(0, 2) +
    ')' +
    ' ' +
    telefone.slice(2, 6) +
    '-' +
    telefone.slice(6, 10)
  );
}
