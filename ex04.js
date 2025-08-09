function verificaNumeros(num1, num2) {
  const oneOfTheNumbersIs30 = num1 === 30 || num2 === 30;
  const sumEqualsTo30 = num1 + num2 === 30;

  return oneOfTheNumbersIs30 || sumEqualsTo30;
}

// Exemplos de uso
console.log(`(30, 10) -> ${verificaNumeros(30, 10)}`); // true (um é 30)
console.log(`(15, 15) -> ${verificaNumeros(15, 15)}`); // true (a soma é 30)
console.log(`(12, 12) -> ${verificaNumeros(12, 12)}`); // false (os dois são 12)
console.log(`(10, 25) -> ${verificaNumeros(10, 25)}`); // false
