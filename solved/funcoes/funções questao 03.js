function maxMin(lista) {
  if (!lista.length) return null;
  let [max, min] = [lista[0], lista[0]];

  for (let n of lista) {
    if (n > max) max = n;
    if (n < min) min = n;
  }
  return { max, min };
}

console.log(maxMin([10, 5, 20, 1, 990, -34, 18, 7, 60, -1000]));
// { max: 990, min: -1000 }
