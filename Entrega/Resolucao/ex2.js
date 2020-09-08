// 2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius.

const read = require('readline-sync')

let tempFahrenheit = parseInt(read.question("Digite uma temperatura em Fahrenheit: ")) //10

function toCelsius(temperatura){
  return ((temperatura - 32) * 5/9).toFixed(1)
}

console.log(toCelsius(tempFahrenheit))
