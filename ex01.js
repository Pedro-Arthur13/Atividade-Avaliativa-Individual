// fazendo um array com o nomed os dias da semana pq se não ele vem em ingles
const diasDaSemana = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const hoje = new Date();

// ao pegar o dia da semana que eh um numero de 0 a 6 usa para buscar o nome em pt no array
const nomeDia = diasDaSemana[hoje.getDay()];
// padStart(2, '0') pra garantir qu etme dois digitos (ex: 09 em vez de 9)
const hora = String(hoje.getHours()).padStart(2, "0");
const minutos = String(hoje.getMinutes()).padStart(2, "0");
const segundos = String(hoje.getSeconds()).padStart(2, "0");

// ◦ A hora atual é: [hora atual no formato de HH:MM:SS].
console.log(`Hoje é: ${nomeDia}.`);
console.log(`A hora atual é: ${hora}:${minutos}:${segundos}.`); // nao sei se ta pegando a hora certa pq to rodando em um compilador online, ent ta pegando a data e hora do servidor deles
