// Crie uma função com as seguintes características:
// A função deve receber 3 parâmetros.
// Se somente um argumento for passado, retorne o valor do argumento.
// Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
// Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
// Se nenhum argumento for passado, retorne "não recebeu parâmetro"
const input = require('readline-sync')
var valorX = parseInt(input.question('Insira o valor de X:'))
var valorY = parseInt(input.question('Insira o valor de y:'))
var valorZ = parseInt(input.question('Insira o valor de z:'))
console.log(valorX, valorY, valorZ)
console.log("-----------------")

function calcule(x, y, z) {
    if (!x && !y && !z) {
        console.log('ERRO>>>Insira pelo menos um dado!')
    } else if (!x) {
        console.log('se !x')
        console.log(y + z)
    } else if (!y) {
        console.log('se !y')
        console.log(x + z)
    } else if (!z) {
        console.log('se !z')
        console.log(x + y)
    } else if (!x && !y && z) {
        console.log('se !x && !y && z')
        console.log(z)
    } else if (!x && y && !z) {
      console.log('se !x && y && !z)')  
      console.log(y)
    } else if (x && !y && !z) {
      console.log('se x && !y && !z')  
      console.log(x)
    } else {
      console.log('else')  
      console.log((x + y) / z)
    }
}
calcule(valorX, valorY, valorZ)