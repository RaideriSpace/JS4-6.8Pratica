const readline = require("readline-sync");

console.log("\nVamos calcular seu novo salario com base no reajuste.");

let nome = readline.question("\nMe diga seu nome: \n");

console.log("\nSelecione seu cargo: ");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Tecnico de TI");

let cargo = readline.questionInt("\nDigite o numero do cargo: ");

let salario = readline.questionFloat("\nDigite seu salario atual: \n");

switch (cargo) {
  case 1:
    let novoSalario1 = salario + salario * 0.1;
    console.log(`Ola, ${nome}`);
    console.log(`Seu cargo: Gerente`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario1.toFixed(2)}`);
    break;
  case 2:
    let  novoSalario2 = salario + salario * 0.07;
    console.log(`Olá, ${nome}`);
    console.log(`Seu cargo: Vendedor`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario2.toFixed(2)}`);
    break;
  case 3:
    let novoSalario3 = salario + salario * 0.09;
    console.log(`Olá, ${nome}`);
    console.log(`Seu cargo: Supervisor`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario3.toFixed(2)}`);
    break;
  case 4:
    let novoSalario4 = salario + salario * 0.06;
    console.log(`Olá, ${nome}`);
    console.log(`Seu cargo: Motorista`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario4.toFixed(2)}`);
    break;
  case 5:
    let novoSalario5 = salario + salario * 0.05;
    console.log(`Olá, ${nome}`);
    console.log(`Seu cargo: Estoquista`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario5.toFixed(2)}`);
    break;
  case 6:
    let novoSalario6 = salario + salario * 0.08;
    console.log(`Olá, ${nome}`);
    console.log(`Seu cargo: Tecnico de TI`);
    console.log(`Seu salario com o reajuste: R$ ${novoSalario6.toFixed(2)}`);
    break;
  default:
    console.log(
      "Desculpe, não consegui encontrar um reajuste para o seu cargo."
    );
}
