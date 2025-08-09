const listaDesordenada = [10, 5, 8, 1, 7, 2, 9, 3, 4, 6];

// (a, b) => a - b   crescente.
// (a, b) => b - a   decrescente.
const listaOrdenada = [...listaDesordenada].sort((a, b) => a - b); //shallowcopy

console.log(`Lista Original: ${listaDesordenada.join(", ")}`);
console.log(`Lista Ordenada: ${listaOrdenada.join(", ")}`);
