// Importar o pacote
const readline = require("readline-sync");

// Lê o primeiro valor
let primeiroValor = readline.questionFloat("Digite o primeiro valor (N1): ");

// Lê o segundo valor
let segundoValor = readline.questionFloat("Digite o segundo valor (N2): ");

// Lê o terceiro valor
let terceiroValor = readline.questionFloat("Digite o terceiro valor (N3): ");

// Lê o quarto valor
let quartoValor = readline.questionFloat("Digite o quarto valor (N4): ");

// Calcula a diferença dos produtos
let calculoDeDiferença = (primeiroValor * segundoValor) - (terceiroValor * quartoValor);

// Mostra a diferença.
console.log(`\nA diferença entre o produto de N1 e N2 e o produto de N3 e N4 é de: ${calculoDeDiferença.toFixed(1)}`);