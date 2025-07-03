import rl = require("readline-sync");

console.log(
  "\nMe dê 5 cores, listarei para você e as ordanerei em ordem alfabetica.\n"
);

const cores: string[] = [];

function formatarCor(cor: string): string {
  return cor.charAt(0).toUpperCase() + cor.slice(1).toLocaleLowerCase();
}

for (let i = 1; i < 6; i++) {
  const corInput = rl.question(`Digita a ${i} cor: `)
  cores.push(formatarCor(corInput));
}

console.clear();

console.log("\nSua lista de cores e: \n");
cores.forEach((cor) => console.log(cor));

console.log("\nCom as cores ordenadas fica: \n");
cores.sort();
cores.forEach((cor) => console.log(cor));
