const readline = require("readline-sync");

console.log("\nIrei te ajudar a identificar um animal pelas caracteristicas.");
let coluna = readline
  .question("\n Ele e: Vertebrado ou Invertebrado?\n")
  .toLowerCase();

if (coluna == "vertebrado") {
  let grupo = readline
    .question("\n Qual o grupo: Ave ou Mamifero?\n")
    .toLowerCase();
  if (grupo == "ave") {
    let dieta = readline
      .question("\n Qual a dieta do animal: Carnivoro ou Onivoro?\n")
      .toLowerCase();
    if (dieta == "carnivoro") {
      console.log("\n Voce esta falando de uma Aguia!");
    } else if (dieta == "onivoro") {
      console.log("\n Voce esta falando de uma Pomba!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else if (grupo == "mamifero") {
    let dieta = readline
      .question("\n Qual a dieta do animal: Onivoro ou Herbivoro?\n")
      .toLowerCase();
    if (dieta == "onivoro") {
      console.log("\n Voce esta falando de um Homem!");
    } else if (dieta == "herbivoro") {
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
} else if (coluna == "invertebrado") {
  let classe = readline
    .question("\n Qual a classe: Inseto ou Anelideo?\n")
    .toLowerCase();

  if (classe == "inseto") {
    let dieta = readline
      .question("\n Qual a dieta do animal: Hematofago ou Herbivoro?\n")
      .toLowerCase();
    if (dieta == "hematofago") {
      console.log("\n Voce esta falando de uma Pulga!");
    } else if (dieta == "herbivoro") {
      console.log("\n Voce esta falando de uma Lagarta!");
    } else {
      console.log(
        "\nHouve algum erro de digitacao, tente novamente. Digite sem acentos, por favor.\n"
      );
    }
  } else if (classe == "anelideo") {
    let dieta = readline
      .question("\n Qual a dieta do animal: Hematofago ou Onivoro?\n")
      .toLowerCase();
    if (dieta == "hematofago") {
      console.log("\n Voce esta falando de uma Sanguessuga!");
    } else if (dieta == "anelideo") {
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
