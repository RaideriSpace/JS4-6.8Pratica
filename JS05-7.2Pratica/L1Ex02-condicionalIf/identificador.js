const readline = require("readline-sync");

console.log("\nMe de um numero, verificarei para voce se ele e par ou impar e se e positivo ou negativo.\n");

let numero = readline.questionInt("Diga seu numero: ");

if ( numero > 0 ) {
  if ( (numero % 2) === 0 ) {
    console.log(`\nSeu numero (${numero}) e positivo e um numero par.`);
  } else if ( (numero % 2) != 0) {
    console.log(`\nSeu numero (${numero}) e positivo e um numero impar.`);
  } else {
    console.log(`\nHouve algum erro!!`);
  }
} else if ( numero < 0 ) {
  if (numero % 2 === 0) {
    console.log(`\nSeu numero (${numero}) e negativo e um numero par.`);
  } else if (numero % 2 != 0) {
    console.log(`\nSeu numero (${numero}) e negativo e um numero impar.`);
  } else {
    console.log(`\nHouve algum erro!!`);
  }
} else {
  console.log("\n Houve algum erro!!");
}