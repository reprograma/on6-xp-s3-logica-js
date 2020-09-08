/*4. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"
   */


const read = require('readline-sync')

let valor1= parseInt(read.question("Digite um valor: ")) //10
let valor2 = parseInt(read.question("Digite um segundo valor: ")) //10
let valor3 = parseInt(read.question("Digite um outr valors: ")) //10


function avaliaParametros(parametro1, parametro2, parametro3){
    if(parametro1 && parametro2 && parametro3){

        console.log("primeiro")
        return (parametro1 + parametro2) / parametro3;

    } else if(!(parametro1 || parametro2 || parametro3)){

        return "Não recebeu parâmetro.";

    } else {
      
        return parametro1 + parametro2 + parametro3;
    }
}

console.log(avaliaParametros(valor1, valor2, valor3))

