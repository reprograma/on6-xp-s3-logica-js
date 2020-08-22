/*
Faça um algoritmo que imprima numero inteiros de 1 a N
Por exemplo o usuário digita 10 e aparece
1
2
3
..
8
9
10
*/

const read = require('readline-sync')

let num = parseInt(read.question("Digite um numero: "))
let contador = 1

// while(contador <= num ){
//   console.log(contador)
//   contador++
// }

while(contador <= num ){
  console.log(contador++)
}