const readline = require("readline-sync");

console.log(
  "\nMe de 10 numeros. Irei verificar quantos são pares e quantos são impares.\n"
);

let numeroPar = 0;
let numeroImpar = 0;

for (let i = 1; i < 11; i++) {
  let numero = readline.questionInt(`Digite o ${i} numero: `);
  if (numero % 2 == 0) {
    numeroPar++;
  } else if (numero % 2 != 0) {
    numeroImpar++;
  }
}

console.log(`\nTotal de numeros pares: ${numeroPar}`);
console.log(`Total de numeros impares: ${numeroImpar}`);
