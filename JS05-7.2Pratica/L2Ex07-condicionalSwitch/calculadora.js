const readline = require("readline-sync");

console.log("\nBem vindo ao ConsoleCalc");
let primeiroNumero = readline.questionFloat("Digite um numero: ");
let segundoNumero = readline.questionFloat("Digite outro numero: ");

console.log("\n Tabela de Operacoes");
console.log("1 - Soma");
console.log("2 - Subtracao");
console.log("3 - Multiplicacao");
console.log("4 - Divisso");
let operacao = readline.questionInt("\n Escolha o codigo de uma operacao: ");

switch (operacao) {
  case 1:
    let soma = primeiroNumero + segundoNumero;
    console.log(
      `\n${primeiroNumero.toFixed(1)} + ${segundoNumero.toFixed(
        1
      )} = ${soma.toFixed(1)}`
    );
    break
  case 2:
    let subtracao = primeiroNumero - segundoNumero;
    console.log(
      `\n${primeiroNumero.toFixed(1)} - ${segundoNumero.toFixed(
        1
      )} = ${subtracao.toFixed(1)}`
    );
    break
  case 3:
    let multiplicacao = primeiroNumero * segundoNumero;
    console.log(
      `\n${primeiroNumero.toFixed(1)} * ${segundoNumero.toFixed(
        1
      )} = ${multiplicacao.toFixed(1)}`
    );
    break
  case 4:
    let divisao = primeiroNumero / segundoNumero;
    console.log(
      `\n${primeiroNumero.toFixed(1)} / ${segundoNumero.toFixed(
        1
      )} = ${divisao.toFixed(1)}`
    );
    break
  default:
    console.log("\nOperacao Invalida! Tente novamente.")
}
