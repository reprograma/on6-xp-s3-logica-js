// cria programa que vai receber o mes do ano e vai indicar se tem feriado

// receber do usuário com readline

const readline = require("readline-sync");

const mes = readline.question('Qual o mes do ano')
const mesFormatado = mes.toLowerCase() 

switch(mesFormatado){
  case "janeiro":
    console.log("Ano novo")
    break;
  case "dezembro":
    console.log("Natal")
    break;
  case "setembro":
    console.log("Independencia")
    break;
  default:
    console.log("Não achamos agenda")
}
