const lado1 = 5;
const lado2 = 6;
const lado3 = 7;

// semiperimetro
const s = (lado1 + lado2 + lado3) / 2;

// formula de heron
//area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
const area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));

console.log(
  `A área do triângulo com lados ${lado1}, ${lado2} e ${lado3} é: ${area.toFixed(2)}`,
);
