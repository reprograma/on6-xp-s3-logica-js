// um programa que exiba somente os numeros impares de N a 1
const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: ")) // 10

for(let contador = num; contador >= 1; contador--){
  if(contador % 2 !== 0){ // !== diferente | === igual
    console.log(contador)
  }
}