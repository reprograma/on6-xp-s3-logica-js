const readline = require('readline-sync')

let num;

do{
  num = readline.question('Digite um número entre 0 e 10: ')
}while(num > 9 || num <= 1)