const readline = require("readline-sync");

console.log(
  "\nMe de numeros inteiros diferentes de 0, \nsomarei os que forem positivos.\n"
);

let numero = 0;
let soma = 0;
let continuar = true;

do {
  numero = readline.questionInt("Digite um numero inteiro: ");
  if (numero > 0) {
    soma += numero;
  } if (numero == 0) {
    continuar = false
  }
} while (continuar == true);

console.log(`\nA Soma dos numeros positivos e: ${soma}`);
