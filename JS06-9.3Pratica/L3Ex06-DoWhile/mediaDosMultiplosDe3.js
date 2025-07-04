const readline = require("readline-sync");

console.log(
  "\nMe de numeros inteiros diferentes de 0, \nmostrarei a media da soma dos que forem multiplos de 3.\n"
);

let numero = 0;
let soma = 0;
let contador = 0;
let media = 0;
let continuar = true;

do {
  numero = readline.questionInt("Digite um numero inteiro: ");
  if (numero % 3 === 0 && numero != 0) {
    contador++;
    soma += numero;
  } else if ( numero === 0){
    continuar = false;
  }
} while (continuar === true);

media = soma / contador;

console.clear();
console.log(`\nA media de todos os numeros multiplos de 3 e: ${media.toFixed(2)}`);
