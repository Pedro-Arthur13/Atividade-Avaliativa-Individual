let alunos = [
  ["Wesley Crusher", [10, 50, 100]],
  ["Spock", [100, 100, 100]],
  ["Platão", [60, 70, 65]],
  ["Aristóteles", [90, 85, 100]],
  ["Anakin Skywalker", [40, 30, 20]]
];

for (let aluno of alunos) {
  let nome = aluno[0];
  let notas = aluno[1];
  let media = notas.reduce((acc, n) => acc + n, 0) / notas.length;
  let status = media >= 70 ? "Aprovado" : "Reprovado";
  console.log(`${nome}, média ${media.toFixed(2)}, ${status}`);
}
