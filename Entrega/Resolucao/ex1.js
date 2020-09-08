// 1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32

const read = require('readline-sync')

let tempCelsius = parseInt(read.question("Digite uma temperatura em Celsius: ")) //10

function toFahrenheit(temperatura){
  return 9 * tempCelsius / 5 + 32
}

console.log(toFahrenheit(tempCelsius))
