const readline = require("readline-sync");

let operando = true;
let saldo = 1000;

while (operando) {
  console.clear();

  console.log("\n  Bem vindo ao ConsoleBank  \n");
  console.log("Escolha uma operacao");
  console.log("1 - Saldo");
  console.log("2 - Saque");
  console.log("3 - Deposito");
  console.log("4 - Sair");

  let opcao = readline.questionFloat("Operacao: \n");
  let sair = false;

  switch (opcao) {
    case 1:
      let operandoSaldo = true;
      while (operandoSaldo){
        console.clear();
        console.log("\n --- Operação - Saldo --- \n");
        console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
        sair = readline.question("Voltar - 1 | Sair - 2\n");
        if (sair == 1){
          operandoSaldo = false;
        } else {
          operando = false;
          operandoSaldo = false;
        }
      }
      break;
    case 2:
      let operandoSaque = true;
      while (operandoSaque){
        console.clear();
        console.log("\n --- Operação - Saque --- \n");
        let saque = readline.questionFloat("Digite o valor para sacar: \n");
        if (saque < saldo) {
          saldo = saldo - saque;
          console.log("Saque realizado.");
          console.log(`Seu novo saldo é de: ${saldo}`);
        } else {
          console.log("Saldo insuficiente!");
        }
        sair = readline.question("Voltar - 1 | Sair - 2\n");
        if (sair == 1) {
          operandoSaque = false;
        } else {
          operando = false;
          operandoSaque = false;
        }
      }
      break;
    case 3:
      let operandoDeposito = true;
      while (operandoDeposito){
        console.clear();
        console.log("\n --- Operação - Depósito --- \n");
        let deposito = readline.questionFloat(
          "Digite o valor para depositar: \n"
        );
        saldo = saldo + deposito;
        console.log("Depósito realizado.");
        console.log(`Seu novo saldo é de: ${saldo}`);
        sair = readline.question("Voltar - 1 | Sair - 2\n");
        if (sair == 1) {
          operandoDeposito = false;
        } else {
          operando = false;
          operandoDeposito = false;
        }
      }
      break;
    case 4:
      console.clear();
      console.log("Obrigado por usar ConsoleBank.");
      console.log(" Saindo...");
      operando = false;
      break;
    default:
      console.log("Operação inválida! ");
      break;
  }
}
