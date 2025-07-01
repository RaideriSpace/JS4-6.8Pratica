const readline = require("readline-sync");

console.log(
  "\nVamos verificar se a soma de A + B é maior, menor ou igual a C.\n"
);

let numeroA = readline.questionInt("Por favor, digite o valor de A: ");
let numeroB = readline.questionInt("Agora digite o valor de B: ");
let numeroC = readline.questionInt("Por fim, digite o valor de C: ");

let somaAB = numeroA + numeroB;

if (somaAB > numeroC) {
  console.log(`\nPara A = ${numeroA}, B = ${numeroB} e C = ${numeroC}`);
  console.log(
    `A soma deu (${numeroA} + ${numeroB}) = ${somaAB} e ${somaAB} > ${numeroC}`
  );
  console.log(`\nEntao, A + B é maior que C.`);
} else if (somaAB === numeroC) {
  console.log(`\nPara A = ${numeroA}, B = ${numeroB} e C = ${numeroC}`);
  console.log(
    `A soma deu (${numeroA} + ${numeroB}) = ${somaAB} e ${somaAB} = ${numeroC}`
  );
  console.log(`\nEntao, A + B é igual a C.`);
} else if (somaAB < numeroC) {
  console.log(`\nPara A = ${numeroA}, B = ${numeroB} e C = ${numeroC}`);
  console.log(
    `A soma deu (${numeroA} + ${numeroB}) = ${somaAB} e ${somaAB} < ${numeroC}`
  );
  console.log(`\nEntao, A + B é menor que C.`);
} else {
  console.log("\nAlgo deu errado. ");
}
