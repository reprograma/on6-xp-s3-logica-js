// Declaraçao da minha função -> nada acontece nesse momento
function dizerOlaParaUsuario(nome, profissao){ // dizerOlaParaUsuario('Sheila')
  console.log(`Olá ${nome} - ${profissao}`) //Olá Sheila
}

const readline =  require('readline-sync')

const nomeUsuario = readline.question('Digite seu nome: ') // ""
const profissaoUsuario = readline.question('Digite sua profissao: ') // ""

dizerOlaParaUsuario(nomeUsuario, profissaoUsuario) // a ordem dos parametro importa

