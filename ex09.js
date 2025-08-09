function somarTamanhoPalavras(frase) {
  const palavras = frase.split(" ");
  let somaTotal = 0;
  for (const palavra of palavras) {
    somaTotal += palavra.length;
  }
  return somaTotal;
}
const minhaFrase = "Ich hasse JavaScript";
const totalCaracteres = somarTamanhoPalavras(minhaFrase);
console.log(`A soma dos tamanhos das palavras na frase é: ${totalCaracteres}`);
