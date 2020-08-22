// um programa que exiba somente os numeros multiplos de 3 ou de 5 do 1 ao N
const read = require('readline-sync')

let num = parseInt(read.question("Digite um valor: ")) //10

for(let contador = 1; contador <= num; contador++){
  if(contador % 3 === 0 || contador % 5 === 0){
    console.log(contador)
  }
}