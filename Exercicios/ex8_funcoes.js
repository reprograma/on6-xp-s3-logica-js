// Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão), cada uma delas recebendo 2 números como parâmetros e retornando o resultado para esse exercício, as funções de multiplicação e divisão não devem aceitar valores iguais a 0 (zero). Adicione esta lógica nas funções.

function soma(num1, num2){
  return num1 + num2
}
console.log("Soma: " + soma(4,8))
console.log("--------------")

function subtracao(num1, num2){
  return num1 - num2
}
console.log("subtração: " + subtracao(14,8))
console.log("--------------")

function multiplicacao(num1, num2){
  if(num1 === 0 || num2 === 0){
    return "Digite um valor válido"
  }else{
    return num1 * num2
  }
}
console.log("multiplicação: " + multiplicacao(5,10))
console.log("multiplicação: " + multiplicacao(5,0))
console.log("multiplicação: " + multiplicacao(0,10))
console.log("--------------")

function divisao(num1, num2){
  if(num1 === 0 || num2 === 0){
    console.log("Digite um valor válido")
  }else{
    return num1 / num2
  }
}
console.log("divisão: " + divisao(20,2))
console.log("divisão: " + divisao(5,0))
console.log("divisão: " + divisao(0,10))