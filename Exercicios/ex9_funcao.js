/* 
Crie uma função com as seguintes características:

1. A função deve receber 3 parâmetros
2. Se qualquer um dos três parâmetros não estiverem preenchidos, a função deve retornar a string: "Preencha todos os valores corretamente!"
3. O retorno da função deve ser a multiplicação dos 3 parâmetros, somando `2` ao resultado da multiplicação.
*/

const readline = require("readline-sync");

function calcular(num1,num2,num3){
  if(num1 === "" || num2 === "" || num3 === "")
    return "Digite um número válido"
  return parseInt(num1 * num2 * num3) + 2
}

const valor1 = readline.question('Digite um valor: ')
const valor2 = readline.question('Digite um valor: ')
const valor3 = readline.question('Digite um valor: ')

console.log(valor1)

// calcular(valor1, valor2, valor3)
