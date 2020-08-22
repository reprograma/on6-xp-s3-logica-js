// Faça um programa que peça uma valor, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: "))

// console.log("numero é menor que 0: ")
// console.log(num < 0)

// console.log("numero é maior que 10: ")
// console.log(num > 10)

// console.log("numero é menor que 0 ou maior que 10: ")
// console.log(num < 0 || num > 10) 

while(num < 0 || num > 10){
  num = parseInt(read.question("Digite um valor novamente: "))
}


