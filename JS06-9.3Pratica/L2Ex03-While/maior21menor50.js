const readline = require("readline-sync");

console.log(
  "\nMe diga a idade de algumas pessoas. \nCalcularei quantas sao menores de 21 anos e quantas sao maiores de 50 anos. \nNao calcularei mais se me disser uma idade negativa.\n"
);

let menor21 = 0;
let maior50 = 0;
let positivo = true;

while(positivo){
  let idade = readline.questionInt("Digite a idade: ");

  if (idade > 0 && idade < 21) {
    menor21++;
  } else if (idade > 0 && idade > 50) {
    maior50++;
  } else if (idade < 0) {
    positivo = false;
  }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menor21} `);
console.log(`Total de pessoas maiores de 50 anos: ${maior50} `);
