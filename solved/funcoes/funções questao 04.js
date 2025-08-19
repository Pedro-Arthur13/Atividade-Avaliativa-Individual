function palavraNaFrase(frase, palavra) {
    // /\b (limite de palavra) \w+ (uma ou mias letras,numeros ou underscore) g(pega todas as ocorrencias(global))
  return (frase.toLowerCase().match(/\b\w+\b/g) || []) // retorna null se n tiver nada
    .includes(palavra.toLowerCase());
}

console.log(palavraNaFrase("Ich hasse es, in Javascript zu programmieren!", "javascript")); // true
console.log(palavraNaFrase("Em vão tenho lutado comigo mesmo; nada consegui. Meus sentimentos não podem ser reprimidos e preciso que me permita dizer-lhe que eu a admiro e a amo ardentemente.", "amigo")); // false
