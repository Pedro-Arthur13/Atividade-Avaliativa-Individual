let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}

console.log("Soma dos pares:", sumEven);
console.log("Soma dos ímpares:", sumOdd);
