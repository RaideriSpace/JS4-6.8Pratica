const rl = require("readline-sync");

console.log(
  "\nMe de um numero, procurarei no meu banco de dados e direi a posicao caso encontre. \n"
);

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let select = rl.questionInt("Digite um numero para procurar: ");
let index = 0;

for (let number of vetor) {
  if (select === number) {
    index = vetor.indexOf(number);
  }
}

if (index > 0) {
  console.clear();
  console.log(`O numero ${select} esta localizado na posicao: ${index}`);
} else {
  console.clear();
  console.log(`O numero ${select} NAO foi encontrado!`);
}
