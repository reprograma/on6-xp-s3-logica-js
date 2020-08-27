// listar do numero que o usuário falou até 0

const num = 50

//for (índice; condição; incremento)

for(let indice = num; indice >= 0; indice--){
  if(indice % 2 === 0){
    console.log(`${indice} é par`)
  }
}