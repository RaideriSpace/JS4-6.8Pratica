import rl from "readline-sync";
import { Stack } from "../../collections/stackMethods";

const stack = new Stack<string>();
let continuar = true;

do {
  console.clear();
  console.log("\n * * * * Bem vindo a livraria ConsoleBook * * * *");
  console.log(" * * O que deseja fazer: \n");
  console.log(" * 1 - Adicionar um livro. ");
  console.log(" * 2 - Ver a lista de livros. ");
  console.log(" * 3 - Retirar último livro da pilha. ");
  console.log(" * 0 - Sair \n");

  let option = rl.questionInt(" * Digite sua opcao: ");

  switch (option) {
    case 1:
      let newBookContinue = true;

      do {
        console.clear();
        console.log("\n * * * * Bem vindo a livraria ConsoleBook * * * *");
        let newBook = rl.question("\n * Digite o nome do livro: \n");

        if (stack.contains(newBook)) {
          console.clear();
          console.log(`\n * O livro \"${newBook}\" ja esta na pilha!`);
        } else {
          stack.push(newBook);
          console.clear();
          console.log("\n * * * * Bem vindo a livraria ConsoleBook * * * *");
          console.log(`\n * O livro \"${newBook}\" foi adicionado!`);
        }
        let newBook2 = rl
          .question("\n * Deseja adicionar outro livro?? (s/n)\n * ")
          .toLocaleLowerCase();
        if (newBook2 == "s") {
          newBookContinue = true;
        } else {
          newBookContinue = false;
        }
      } while (newBookContinue);
      break;

    case 2:
      let seeBook = true;

      do {
        console.clear();
        console.log("\n * * * * Bem vindo a livraria ConsoleBook * * * *\n");

        if (stack.isEmpty()) {
          console.log("A pilha de livros esta vazia.");
        } else {
          console.log(` * Existem ${stack.count()} livros na pilha. \n`);
          console.log(" * A pilha de livros esta assim: \n");
          stack.printStack();
        }

        let seeBookContinue = rl.questionInt("\n * Digite 0 para voltar.");

        if (seeBookContinue == 0) {
          seeBook = false;
        }
      } while (seeBook);
      break;

    case 3:
      let removeBook = true;
      do {
        console.clear();
        console.log("\n * * * * Bem vindo a livraria ConsoleBook * * * *");
        let removeBookContinue;

        if (stack.isEmpty()) {
          console.log(
            "\n * Não ha livros na pilha, volte e adicine alguns livros. "
          );
          let emptyStack = rl.questionInt("\n * Digite 0 para voltar.");
          if (emptyStack == 0) {
            removeBookContinue = false;
          } else {
            console.log("Opcao invalida. Tente novamente!");
          }
        } else {
          console.log(
            `\n * O livro \"${stack.peek()}\" foi removido da pilha!`
          );
          console.log("\n * Agora a pilha está assim: \n");
          stack.pop();
          stack.printStack();
          removeBookContinue = rl.question("\n * Remover outro livro? (s/n)");
        }

        if (removeBookContinue == "s") {
          removeBook = true;
        } else {
          removeBook = false;
        }
      } while (removeBook);
      break;

    case 0:
      continuar = false;
      break;

    default:
      console.log("Opcao invalidada. Tente uma valida!");
      break;
  }
} while (continuar);
