// 5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.

const read = require('readline-sync')

let num = parseFloat(read.question("Digite um numero: "))

function somarNumero(){
    let resultado = 1
    for(let cont = num; cont > 1; cont--){
        resultado += cont
    }
    return resultado;
}

console.log(somarNumero(num))
