function contarVogaisConsoantes(frase) {
  // normaliza para decompor caracteres acentuados
  const normalizada = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase();

  let vogais = 0, consoantes = 0;

  for (let c of normalizada) {
    // ignora números, espaços e símbolos
    if (/[a-z]/.test(c)) {
      "aeiou".includes(c) ? vogais++ : consoantes++;
    }
  }

  return { vogais, consoantes };
}

// exemplo
console.log(contarVogaisConsoantes("Ich hasse JavaScript!")); 
// vogais: 6, consoantes: 12(considera as repetidas como 's' 
