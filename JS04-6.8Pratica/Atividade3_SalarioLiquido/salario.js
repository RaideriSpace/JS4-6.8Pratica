// Importar o pacote
const readline = require("readline-sync");

// Lê o salário bruto
let salarioBruto = readline.questionFloat("Digite o seu salário bruto: ");

// Lê o adicional noturno
let adicionalNoturno = readline.questionFloat("Digite o valor do adicional noturno: ");

// Lê as horas extras
let horasExtras = readline.questionFloat("Digite o valor da hora extra: ");

// Lê os descontos
let descontos = readline.questionFloat("Digite o valor dos descontos: ");

// Faz o cálculo do salário líquido
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

// Mostra o salário Líquido
console.log(`\nSeu salário líquido é de: ${salarioLiquido.toFixed(2)}`);