const readline = require("readline-sync");

console.log("\n --- Bem vindo ao ConsoleFood ---");
console.log("  Escolha um item pelo codigo    ");
console.log("  1 - Cachorro Quente - R$ 10.00 ");
console.log("  2 - X-Salada - R$ 15.00 ");
console.log("  3 - X-Bacon - R$ 18.00 ");
console.log("  4 - Bauru - R$ 12.00 ");
console.log("  5 - Refrigerante - R$ 8.00 ");
console.log("  6 - Suco de Laranja - R$ 13.00 ");

let pedido = readline.questionInt("\nQual o codigo do pedido? \n");

let quantidade = readline.questionInt("Quantos itens vai querer? ");

switch (pedido) {
  case 1:
    console.log("\nProduto: Cachorro Quente");
    let hotDog = 10;
    let totalDog = quantidade * hotDog;
    console.log(`Unidade: R$${hotDog},00`);
    console.log(`Valor total: R$${totalDog},00`);
    break;
  case 2:
    console.log("\nProduto: X-Salada");
    let xSalada = 15;
    let totalSalada = quantidade * xSalada;
    console.log(`Unidade: R$${xSalada},00`);
    console.log(`Valor total: R$${totalSalada},00`);
    break;
  case 3:
    console.log("\nProduto: X-Bacon");
    let xBacon = 18;
    let totalxBacon = quantidade * xBacon;
    console.log(`Unidade: R$${xBacon},00`);
    console.log(`Valor total: R$${totalxBacon},00`);
    break;
  case 4:
    console.log("\nProduto: Bauru");
    let bauru = 12;
    let totalBauru = quantidade * bauru;
    console.log(`Unidade: R$${bauru},00`);
    console.log(`Valor total: R$${totalBauru},00`);
    break;
  case 5:
    console.log("\nProduto: Refrigerante");
    let refrigerante = 8;
    let totalRefri = quantidade * refrigerante;
    console.log(`Unidade: R$${refrigerante},00`);
    console.log(`Valor total: R$${totalRefri},00`);
    break;
  case 6:
    console.log("\nProduto: Cachorro Quente");
    let sucoLaranja = 15;
    let totalSucoLaranja = quantidade * sucoLaranja;
    console.log(`Unidade: R$${sucoLaranja},00`);
    console.log(`Valor total: R$${totalSucoLaranja},00`);
    break;
  default:
    console.log("Você não escolheu nenhum item válido.");
    break;
}
