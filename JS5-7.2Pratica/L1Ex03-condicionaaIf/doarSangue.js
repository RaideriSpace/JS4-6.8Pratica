const readline = require("readline-sync");

console.log("\nPara doar sangue, preciso fazer uma verificação do seu perfil.");

let nome = readline.question("\n Primeiro, me diga seu nome: ");
let idade = readline.questionInt("\n Agora, me diga sua idade: ");
let doou = readline.questionInt("\n E sua primeira doacao de sangue? 1- Sim | 2 - Nao ");

if (doou == "1") {
  doou = true;
} else {
  doou = false;
}

if (idade >= 18 && idade <= 69) {
  if (idade < 60 || (idade > 60 && !doou)) {
    console.log(`\n ${nome}, você está apto para doar sangue!`);
  } else {
    console.log(`\n ${nome}, você NÃO está apto a doar sangue! `);
  }
} else {
  console.log(`\n ${nome}, você NÃO está apto a doar sangue! `);
}
