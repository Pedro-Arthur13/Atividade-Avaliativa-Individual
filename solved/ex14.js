function verificarPalavraNaFrase(frase, palavra) {
  const fraseLower = frase.toLowerCase();
  const palavraLower = palavra.toLowerCase();
  const estaPresente = fraseLower.includes(palavraLower);

  if (estaPresente) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
  } else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
  }
}

verificarPalavraNaFrase("Aye Aye, Captain!", "Aye Aye");
verificarPalavraNaFrase(
  "O que quer dizer? Você está me desejando um bom dia ou dizendo que este é um bom dia independente de minha vontade, ou talvez queira me dizer que se sente bem nesse dia ou então este é um bom dia para se estar bem?",
  "bom dia",
);

verificarPalavraNaFrase("Heghlu'meH QaQ jajvam", "bruh");
