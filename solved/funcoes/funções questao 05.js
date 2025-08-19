function maiorPalavra(frase) {
  const palavras = frase.match(/\b\w+\b/g) || [];
  return palavras.reduce((a, b) => b.length > a.length ? b : a, "");
}

// exemplos
console.log(maiorPalavra("Oh! Meine süße und schöne Dame, deine Präsenz verändert die ganze Umgebung. Der Wind, der zuvor ruhig war, beginnt nun zu wehen, nur um deine Haut zu streicheln. Die Blumen auf dem Feld, die zuvor verborgen waren, zeigen sich nun eifersüchtig auf deine Schönheit")); // streicheln
console.log(maiorPalavra("Vida longa e próspera!")); // próspera
