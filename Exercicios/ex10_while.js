const read = require('readline-sync')

let num = read.question("Digite um numero: ")
console.log(num)

while (num < 10) {
  num = read.question("Digite um numero: ")
}
