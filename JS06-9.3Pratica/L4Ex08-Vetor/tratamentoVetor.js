const rl = require("readline-sync");

console.log(
  "\nMe de 10 numeros inteiros. \nIrei separa-los em pares e impares, dar a soma total e a media dos valores.\n"
);

let vetor = [];
let vetorPar = [];
let indexPar = 0;
let vetorImpar = [];
let indexImpar = 0;
let soma = 0;
let media = 0;

for (let i = 0; i < 10; i++) {
  vetor[i] = rl.questionInt(`${i + 1} numero: `);
}

for (let item of vetor) {
  soma += item;
  if (vetor.indexOf(item) % 2 != 0) {
    vetorImpar[indexImpar] = item;
    indexImpar++;
  }

  if (item % 2 === 0) {
    vetorPar[indexPar] = item;
    indexPar++;
  }
}

media = soma / 10;

console.clear();
console.log(`Os elementos nos indices impares sao: \n ${vetorImpar}`);
console.log(`\nOs elementos pares sao: \n ${vetorPar}`);
console.log(`\nA soma dos numeros e: ${soma}`);
console.log(`\nA media dos numeros e: ${media.toFixed(2)}`);
