function formatarNomeExemplo(nomeCompleto) {
  const partes = nomeCompleto.split(" ");
  const primeiroNome = partes.shift(); //remove o primeiro elemento de um array e retorna esse elemento
  const ultimoNome = partes.pop();

  // iniciais de cada nome do meio com ponto ao final
  let iniciaisMeio = partes.map((nome) => `${nome[0]}.`).join(" ");

  //  "Sobrenome. Iniciais. PrimeiroNome"
  return `${ultimoNome[0]}. ${iniciaisMeio} ${primeiroNome}`;
}

console.log(formatarNome("Alan Mathison Turing"));
console.log(formatarNome("Tolkien Ronald Reuel John"));
