import rl = require("readline-sync");

console.log(
  "\nMe de 10 numeros inteiros.\nFarei uma lista ordenada com os que não forem repetidos.\n"
);

const numberList = new Set<number>();

for (let i = 1; i < 11; i++) {
  numberList.add(rl.questionInt(`${i} numero: `));
}

console.clear();

const numberListOrder = new Set(Array.from(numberList).sort((a, b) => a - b));

console.log("\n--- Aqui está sua lista de números --- \n");
numberListOrder.forEach((number) => {
  console.log(`${number}`);
});
