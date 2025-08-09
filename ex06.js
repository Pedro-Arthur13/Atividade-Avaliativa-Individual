function encontrarModa(arrayDeNumeros) {
  const contagem = new Map(); // tipo uma lista de Pair em java
  let moda = arrayDeNumeros[0];
  let maxContagem = 0;

  for (const numero of arrayDeNumeros) {
    const atualContagem = (contagem.get(numero) || 0) + 1; // (numero atual || se nao tiver eh 0) + 1
    contagem.set(numero, atualContagem);

    if (atualContagem > maxContagem) {
      maxContagem = atualContagem;
      moda = numero;
    }
  }
  //   console.log(contagem)
  return moda;
}

const numeros = [1, 2, 3, 3, 3, -2, -2, -2, -2, -2];
console.log(encontrarModa(numeros));
