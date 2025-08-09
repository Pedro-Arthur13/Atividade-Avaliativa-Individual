const lista = [1, 2, 3, 4];
// ao cubo
const cubos = lista.map((numero) => numero ** 3);
// soma tudo
const somaDosCubos = cubos.reduce((soma, valor) => soma + valor, 0);
console.log(`A lista original é: [${lista.join(", ")}]`);
console.log(`Valores ao cubo: [${cubos.join(", ")}]`);
console.log(`A soma total dos valores ao cubo é: ${somaDosCubos}`);
