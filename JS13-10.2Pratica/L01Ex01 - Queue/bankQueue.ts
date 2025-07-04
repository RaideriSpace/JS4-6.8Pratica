import rl from "readline-sync";
import { Queue } from "../../collections/queueMethods";

const queue = new Queue<string>();
let continua: boolean = true;

do {
  console.clear();
  console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
  console.log(" --- 1 - Adicionar cliente na fila.          --- ");
  console.log(" --- 2 - Verificar a fila.                   --- ");
  console.log(" --- 3 - Chamar pessoa da fila.              --- ");
  console.log(" --- 4 - Resetar a lista.                    --- ");
  console.log(" --- 0 - Sair.                               --- ");

  let option = rl.questionInt("\nEscolha uma opcao: ");

  switch (option) {
    case 1:
      let oneMore = true;
      do {
        console.clear();
        console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
        let newClient = rl.question(
          " --- Digite o nome do cliente:               --- \n"
        );
        if (queue.contains(newClient)) {
          console.log(`\n --- ${newClient} ja estava na lista! \n`);
        } else {
          queue.enqueue(newClient);
          console.log(`\n --- ${newClient} foi adicionado(a)! \n`);
        }
        let oneMoreOption = rl
          .question(" --- Deseja adicionar outro? (s/n)           --- \n")
          .toLowerCase();
        if (oneMoreOption == "n") {
          oneMore = false;
        } else {
          oneMore = true;
        }
      } while (oneMore);
      break;

    case 2:
      let seeList = true;
      do {
        console.clear();
        console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
        if (queue.isEmpty()) {
          console.log(` --- A fila esta vazia.                      --- \n`);
        } else {
          console.log(
            ` --- A fila esta com ${queue.count()} pessoas.               --- \n`
          );
          console.log(" --- Aqui esta a lista:                      --- ");
          queue.printQueue();
          console.log(
            `\n --- O proximo a ser chamado é: ${queue.peek()}      \n`
          );
        }
        let setListValidation = rl.questionInt(
          " --- Para voltar, digite 0.                  ---\n"
        );
        if (setListValidation == 0) {
          seeList = false;
        } else {
          seeList = true;
        }
      } while (seeList);
      break;

    case 3:
      let seeNext = true;
      do {
        console.clear();
        console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
        console.log(
          ` --- Anuncie que chegou a vez do atendimento ---\n --- de ${queue.peek()}              \n`
        );
        queue.dequeue();
        console.log(" --- Estou removendo ele(a) da lista.        --- ");

        let setListValidation = rl.questionInt(
          " --- Para voltar, digite 0.                  --- \n"
        );
        if (setListValidation == 0) {
          seeNext = false;
        } else {
          seeNext = true;
        }
      } while (seeNext);

      break;

    case 4:
      let reset = true;
      do {
        console.clear();
        console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
        console.log(
          " --- Voce tem certeza de que deseja esvaziar --- \n --- a lista?                                ---"
        );
        console.log("\n --- 1 - Sim | 2 - Nao                       ---");
        let resetContinue = rl.questionFloat("\n");
        if (resetContinue == 1) {
          console.log(
            "\n --- Esta acao e irreversivel.               --- \n --- Digite 1 para continuar                 ---"
          );
          let resetContinueConfirm = rl.questionFloat("\n");
          if (resetContinueConfirm == 1) {
            queue.clear();
            console.clear();
            console.log(
              "\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n"
            );
            console.log(" --- Pronto! Lista esvaziada com sucesso.    ---");
          } else {
            console.log(" --- A limpeza da fila foi cancelada!        --- ");
          }
        } else if (resetContinue == 2) {
          console.log("\n --- $ Bem vindo ao sistema do ConsoleBank $ --- \n");
          console.log(" --- A limpeza da fila foi cancelada!        --- ");
        } else {
          console.log(" --- Opcao invalida, tente uma opcao valida  ---");
        }

        let setReset = rl.questionInt(
          " --- Para voltar, digite 0.                  ---\n"
        );
        if (setReset == 0) {
          reset = false;
        } else {
          reset = true;
        }
      } while (reset);
      break;

    case 0:
      continua = false;
      break;

    default:
      console.log(
        `A opcao ${option} nao e uma opcao valida. Tente uma valida!`
      );
      break;
  }
} while (continua);
