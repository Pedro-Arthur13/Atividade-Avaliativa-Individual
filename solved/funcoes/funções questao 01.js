function inverterNumero(num) {
  const negative = num < 0;
  const inverted = String(Math.abs(num))
    .split('')
    .reverse()
    .join('');
  return negative ? -Number(inverted) : Number(inverted);
}

// exemplos
console.log(inverterNumero(12356)); // 65321
console.log(inverterNumero(-409));  // -904
