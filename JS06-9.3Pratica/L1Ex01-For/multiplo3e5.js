const readline = require("readline-sync");

console.log(
  "\n Me de dois numeros, irei verificar quais entre este intervalo e multiplo de 3 e 5.\n"
);

let numeroMenor = readline.questionInt("Digite um numero inteiro inicial: ");
let numeroMaior = readline.questionInt("Digite um numero inteiro final: ");

if (numeroMaior > numeroMenor) {
  console.log(`\nNo intervalo entre ${numeroMenor} e ${numeroMaior}: \n`);

  for (let i = numeroMenor; i < numeroMaior; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} é múltiplo de 3 e 5.`);
    }
  }
} else {
  console.log(`\nIntervalo invalido! ${numeroMenor} > ${numeroMaior}`);
}
