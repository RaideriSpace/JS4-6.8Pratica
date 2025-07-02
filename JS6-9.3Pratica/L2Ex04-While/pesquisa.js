const readline = require("readline-sync");

let continuar = true;
let backend = 0;
let frontendMulhercisTrans = 0;
let mobileHomenCisTransMais40 = 0;
let fullstackNaoBinarioMenos30 = 0;
let totalPessoas = 0;
let idadeTotal = 0;
let mediaIdade = 0;

console.log("\nBem vindo a pesquisa interna de colaboradores!");
console.log("Responda as seguintes perguntas: ");


while (continuar) {
  idade = readline.questionFloat("\n Idade: ");
  genero = readline.questionInt(
    "\nIdentidade de Genero:\n  1 - Mulher Cis\n  2 - Homen Cis\n  3 - Nao Binario\n  4 - Mulher Trans\n  5 - Homen Trans\n  6 - Outros \n"
  );
  desenvolvedor = readline.questionInt(
    "\nPessoa Desenvolvedora:\n  1 - Backend\n  2 - Frontend\n  3 - Mobile\n  4 - FullStack \n"
  );

  if (desenvolvedor == 1) {
    backend++;
  } else if (desenvolvedor == 2 && (genero == 1 || genero == 4)) {
    frontendMulhercisTrans++;
  } else if (desenvolvedor == 3 && (genero == 2 || genero == 4) && idade > 40) {
    mobileHomenCisTransMais40++;
  } else if (desenvolvedor == 4 && genero == 3 && idade < 30) {
    fullstackNaoBinarioMenos30++;
  }

  totalPessoas++;
  idadeTotal += idade;

  let novoCadastro = readline
    .question("\nDeseja cadastrar outro colaborador? (S/N) \n")
    .toLowerCase();
  if (novoCadastro === "s") {
    console.clear();
    continuar = true;
  } else if (novoCadastro === "n") {
    console.clear();
    continuar = false;
  } else {
    console.log("Comando não reconhecido. Encerrando pesquisa.");
    continuar = false;
  }
}

mediaIdade = idadeTotal / totalPessoas;

console.log("\nObrigado pela participação!\n");
console.log("\nCom base nos colaboradores cadastrados:\n");
console.log(`O numero de pessoas desenvolvedoras Backend: ${backend} `);
console.log(
  `O numero de Mulheres Cis e Trans desenvolvedoras Frontend: ${frontendMulhercisTrans}`
);
console.log(
  `O numero de Homens Cis e Trans desenvolvedoras Mobile maiores de 40 anos: ${mobileHomenCisTransMais40}`
);
console.log(
  `O numero de Não Binários desenvolvedores FullStack menores de 30 anos: ${fullstackNaoBinarioMenos30}`
);
console.log(
  `O numero total de pessoas que responderam a pesquisa: ${totalPessoas}`
);
console.log(
  `A media de idade das pessoas que responderam a pesquisa: ${mediaIdade.toFixed(
    2
  )}\n`
);
