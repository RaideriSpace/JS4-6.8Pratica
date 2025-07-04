const rl = require("readline-sync");

console.log(
  "\nMe de uma Matriz 3x3 de numeros inteiros\n Verificarei os elementos: \n - Na diagonal principal\n - Na diagonal secundaria\n - A soma de todos os elementos da diagonal principal\n - A soma de todos os elementos da diagonal secundaria\n"
);

let matriz = new Array(3);
let diagonalPrincipal = [];
let indexPrincipal = 0;
let diagonalSecundaria = [];
let indexSecundaria = 0;
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < matriz.length; i++) {
  matriz[i] = Array(3);
}

for (let iLinha = 0; iLinha < matriz.length; iLinha++) {
  for (let iColuna = 0; iColuna < matriz.length; iColuna++) {
    matriz[iLinha][iColuna] = rl.questionInt(
      `Digite o numero da posicao[${iLinha}][${iColuna}]: `
    );

    if (iLinha == iColuna) {
      diagonalPrincipal[indexPrincipal] = matriz[iLinha][iColuna];
      indexPrincipal++;
      somaPrincipal += matriz[iLinha][iColuna];
    }

    if (iLinha + iColuna == 2) {
      diagonalSecundaria[indexSecundaria] = matriz[iLinha][iColuna];
      indexSecundaria++;
      somaSecundaria += matriz[iLinha][iColuna];
    }
  }
}

console.clear();
// console.table(matriz);
console.log("Os elementos da diagonal principal sao: ");
console.log(diagonalPrincipal);
console.log("\nOs elementos da diagonal secundaria sao: ");
console.log(diagonalSecundaria);
console.log("\nA soma dos elementos da diagonal principal e: ");
console.log(somaPrincipal);
console.log("\nA soma dos elementos da diagonal secundaria e: ");
console.log(somaSecundaria);
