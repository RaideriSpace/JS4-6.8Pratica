const rl = require("readline-sync");

let matrizNotas = new Array(10);
let somaNotas = 0;
let mediaNotas = [];

for (let i = 0; i < matrizNotas.length; i++) {
  matrizNotas[i] = Array(4);
}

console.log("\n Me de as nota de cada aluno em cada bimestre, calcularei a media de cada aluno.\n")

for (let iLinha = 0; iLinha < matrizNotas.length; iLinha++) {
  for (let iColuna = 0; iColuna < matrizNotas[iLinha].length; iColuna++) {
    matrizNotas[iLinha][iColuna] = rl.questionFloat(
      `Digite a nota do aluno ${iLinha + 1} no bimestre ${iColuna + 1}: `
    );
    somaNotas += matrizNotas[iLinha][iColuna];
  }

  mediaNotas[iLinha] = (somaNotas/4).toFixed(1);
  somaNotas = 0;
}

console.clear();
console.log("\nA media das notas dos alunos, em ordem e de: ")
console.table(mediaNotas);
