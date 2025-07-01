const readline = require("readline-sync");

console.log("\nIrei te ajudar a identificar um animal pelas características.");
let coluna = readline.question("\n Ele é vertebrado ou invertebrado?\n");

if (coluna == "vertebrado" || coluna == "Vertebrado") {
  let grupo = readline.question("\n Qual o grupo: Ave ou Mamifero?\n");
  if (grupo == "ave" || grupo == "Ave") {
    let dieta = readline.question(
      "\n Qual a dieta do animal: Carnivoro ou Onivoro?\n"
    );
    if (dieta == "Carnivoro" || dieta == "carnivoro") {
      console.log("\n Voce esta falando de uma Aguia!");
    } else if (dieta == "Onivoro" || dieta == "onivoro") {
      console.log("\n Voce esta falando de uma Pomba!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else if (grupo == "Mamifero" || grupo == "mamifero") {
    let dieta = readline.question(
      "\n Qual a dieta do animal: Onivoro ou Herbivoro?\n"
    );
    if (dieta == "Onivoro" || "onivoro") {
      console.log("\n Voce esta falando de um Homem!");
    } else if (dieta == "Herbivoro" || dieta == "herbivoro") {
      console.log("\n Voce esta falando de uma Vaca!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else {
    console.log(
      "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
    );
  }
} else if (coluna == "invertebrado" || coluna == "Invertebrado") {
  let classe = readline.question("\n Qual a classe: Inseto ou Anelideo?\n");

  if (classe == "inseto" || classe == "Inseto") {
    let dieta = readline.question(
      "\n Qual a dieta do animal: Hematofago ou Herbivoro?\n"
    );
    if (dieta == "Hematofago" || dieta == "hematofago") {
      console.log("\n Voce esta falando de uma Pulga!");
    } else if (dieta == "Herbivoro" || dieta == "herbivoro") {
      console.log("\n Voce esta falando de uma Lagarta!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else if (classe == "anelideo" || classe == "Anelideo") {
    let dieta = readline.question(
      "\n Qual a dieta do animal: Hematofago ou Onivoro?\n"
    );
    if (dieta == "Hematofago" || dieta == "hematofago") {
      console.log("\n Voce esta falando de uma Sanguessuga!");
    } else if (dieta == "anelideo" || dieta == "Anelideo") {
      console.log("\n Voce esta falando de uma Minhoca!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else {
    console.log(
      "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
    );
  }
}
