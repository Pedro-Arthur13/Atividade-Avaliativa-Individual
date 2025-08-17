function modificarFrase(frase) {
  const palavras = frase.split(" ");

  //mapeando / arrow function
  const palavrasModificadas = palavras.map((palavra) => {
    if (palavra.length < 5) {
      return palavra.toUpperCase();
    } else if (palavra.length > 5) {
      return palavra.toLowerCase();
    } else {
      return palavra;
    }
  });

  // juntando as palavras modificadas de volta em uma frase
  return palavrasModificadas.join(" ");
}

const fraseOriginal = "eIns zwei drei vier fünf zechs Sieben";
const fraseModificada = modificarFrase(fraseOriginal);
console.log(`Frase original: ${fraseOriginal}`);
console.log(`Frase modificada: ${fraseModificada}`);
