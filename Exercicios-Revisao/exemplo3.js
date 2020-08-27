/*4. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"

*/

function escrever(p1, p2, p3) {
  if (p1 === null){
    return "Digite um parametro válido"
  }
  return p1 + p2 + p3
}

console.log(escrever(null,null,3))