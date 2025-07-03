import rl = require("readline-sync");

console.log(
  "\nMe diga um numero inteiro e verificarei se tenho ele cadastrado aqui.\n"
);

const numberList = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let selecao: number = rl.questionInt("Digite o numero: ");

if (numberList.has(selecao)){
  console.clear();
  console.log(`O numero ${selecao} foi encontrado!`);
} else {
  console.clear();
  console.log(`O numero ${selecao} NAO foi encontrado!`);
}
