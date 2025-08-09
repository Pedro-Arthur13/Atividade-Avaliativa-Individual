function checaIntervalo(n1, n2, n3) {
  const todosNoIntervalo =
    n1 >= 50 && n1 <= 99 && n2 >= 50 && n2 <= 99 && n3 >= 50 && n3 <= 99; // considerei o 99 e o 50 tbm

  if (todosNoIntervalo) {
    console.log("Sucesso! Todos os números estão no intervalo [50, 99].");
  } else {
    console.log("Erro! Pelo menos um dos números está fora do intervalo.");
  }
}

checaIntervalo(55, 60, 98); // sucess
checaIntervalo(49, 70, 99); // failure
