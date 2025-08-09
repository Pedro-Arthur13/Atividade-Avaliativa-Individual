// dividir em functions pq não somos animais não é mesmo
function celsiusParaFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${celsius}°C é igual a ${fahrenheit.toFixed(1)}°F`;
}

function fahrenheitParaCelsius(fahrenheit) {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return `${fahrenheit}°F é igual a ${celsius.toFixed(1)}°C`;
}

// testando
console.log(celsiusParaFahrenheit(30)); // 30°C para °F
console.log(fahrenheitParaCelsius(451)); // Fahrenheit 451 reference
