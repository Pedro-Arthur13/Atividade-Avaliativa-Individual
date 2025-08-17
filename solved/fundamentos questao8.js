function inverterFrase(frase) {
  // transforma e array -> invertee -> junta
  return frase.split("").reverse().join("");
}
const texto =
  "noradla ramár ev ëmitónú inéy ,nenirús issal ratnal ëirual !iA !ëirámaN";
const textoInvertido = inverterFrase(texto);
console.log(`Frase original: ${texto}`);
console.log(`Frase invertida: ${textoInvertido}`);
