const read = require('readline-sync')

let num;

do{
  num = read.question("Digite um numero: ")
}while(num < 10)