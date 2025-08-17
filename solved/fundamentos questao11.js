function ultimosNElementos(lista, n) {
  if (n <= 0) {
    return []; // lista vazia se n for 0 ou negativo
  }

  // se n eh maior que o comprimento da lista
  if (n > lista.length) {
    return lista; //  toda lista se n for maior que o comprimento
  }

  // retorna os ultimos n elementos
  return lista.slice(-n);
}

const numerosLista = [10, 58, 68, 88, 25, 45];
const n = 4;
const ultimos = ultimosNElementos(numerosLista, n);

console.log(ultimos);
