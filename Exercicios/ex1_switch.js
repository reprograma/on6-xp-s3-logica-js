const dia = "Terça"
const diaFormatada = dia.toLowerCase() 
console.log(diaFormatada)

switch(diaFormatada){
  case "segunda":
    console.log("Você tem uma reunião as 10h")
    break;
  case "terça":
    console.log("Você tem yoga as 8h")
    break;
  case "sexta":
    console.log("Happy hour virtual as 18h!")
    break;
  default:
    console.log("Não achamos agenda")
}
