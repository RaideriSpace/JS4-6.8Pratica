import leia = require("readline-sync");

console.log(
  "\nMe diga um numero e verificarei se tenho ele cadastrado aqui e qual o valor do seu index."
);
const numberList: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let selecao = leia.questionInt("Digite um numero inteiro: ");
let index: number = 0;

numberList.forEach((numero) => {
  if (numero == selecao) {
    index = numberList.indexOf(numero);
  }
});

if (index > 0) {
  console.clear()
  console.log(`O numero ${selecao} esta localizado na posicao: ${index}`);
} else {
  console.clear()
  console.log(`O numero ${selecao} não foi encontrado!`);
}
