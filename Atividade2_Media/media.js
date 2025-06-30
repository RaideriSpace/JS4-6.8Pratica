// Importar o pacote
const readline = require("readline-sync");

// Lê a primeira nota
let primeiraNota = readline.questionFloat("Digite a primeira nota: ");

// Lê a segunda nota
let segundaNota = readline.questionFloat("Digite a segunda nota: ");

// Lê a terceira nota
let terceiraNota = readline.questionFloat("Digite a terceira nota: ");

// Lê a quarta nota
let quartaNota = readline.questionFloat("Digite a quarta nota: ");

// Calcula a média
let calcularMedia = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4

// Mostra a média calculada
console.log(`\nSua média final é ${calcularMedia.toFixed(1)}`)