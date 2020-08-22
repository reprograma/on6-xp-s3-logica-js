// um programa que exiba somente os numero pares de N a 1

const read = require('readline-sync')

function anunciacao(numero){
  console.log(`Esse é par: ${numero}`)
}

let num = parseInt(read.question("Digite um valor: ")) // 10

for(let contador = num; contador >= 1; contador--){
  if(contador % 2 === 0){
    anunciacao(contador)
  }
}