// 3. Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const read = require('readline-sync')

let valorMetros = parseInt(read.question("Digite um valor em metros: ")) //10

function toMilimetros(metros){
  return metros * 1000
}

console.log(toMilimetros(valorMetros))
