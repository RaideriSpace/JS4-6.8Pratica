// Importar o pacote
const readline = require("readline-sync");

// Ler o valor do salário
let salario = readline.questionFloat("Digite o salário: ");

// Ler o valor do abono
let abono = readline.questionFloat("Digite o abono: ");

// Somar o salário com o abono
let novoSalario = salario + abono;

// Mostrar o novo valor
console.log(`O valor do seu novo salário é de: ${novoSalario.toFixed(2)}`);