<h1 align="center">
  <br>
  <img src="assets/web-development.png" alt="Front-End Checklist" width="170">
  <br>
    <br>
        Semana 3
  <br>
</h1>
<p align="center">Resolução de Problemas/Lógica aplicada e JavaScript<p>


## Sumário

1. **[Switch](#switch)**
2. **[Funções](#funções)**
3. **[Laços](#laços)**

----


### Switch
Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

```javascript
var dia = 'Segunda';

switch ( dia ) {
	case 'Segunda':
		alert('😴');
		break;
	case 'Terça':
		alert('😐');
		break;
	case 'Quarta':
		alert('🙂');
		break;
	case 'Quinta':
		alert('😬');
		break;
	case 'Sexta':
		alert('🤪');
		break;
	case 'Sábado':
		alert('😎');
		break;
	case 'Domingo':
		alert('😞');
		break;
	default:
		alert('Não achei sua condição.');
}
```

#### Importância do break (switch case)
A instrução opcional break associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso break seja omitido, o programa continua a execução para a próxima instrução dentro de switch. 

Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não:


```javascript
var dia = 'Segunda';

switch ( dia ) {
	case 'Segunda':
		alert('😴');
	case 'Terça':
		alert('😐');
	case 'Quarta':
		alert('🙂');
	case 'Quinta':
		alert('😬');
	case 'Sexta':
		alert('🤪');
	case 'Sábado':
		alert('😎');
	case 'Domingo':
		alert('😞');
	default:
		alert('Não achei sua condição.');
}
```

### Funções

Uma função JavaScript é definida com a palavra-chave `function`, seguida por um **nome**(opcional), seguido por parênteses **()**.


```javascript
function nome(parametro1, parametro2, parametro3) {
  // código a ser executado
}
```
Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras que as variáveis).

O trecho entre parênteses são os parâmetros **(parametro1, parametro2)**. Você pode dar o nome que quiser também, desde que façam sentido. Os parâmetros são muito importantes pois é através deles que a função recebe as informações que precisa para fazer o que queremos. Importante também: as funções podem não receber parâmetro nenhum, caso não precise, ou receber quantos precisar. Não tem número mínimo nem máximo.

Os parâmetros são separados por vírgulas: **(parâmetro1, parâmetro2, ...)**

O código a ser executado, pela função, é colocado entre colchetes: **{}**

A palavra-chave **return** é quem "manda pra fora" da função a informação que queremos. Sem o retorno, a função pode fazer várias tarefas, mas nenhum dado que ela processar vai poder ser acessado pelo restante do código.

A função também tem dois momentos. No primeiro, quando ela é declarada, escrevemos tudo: nome, o que faz, o que retorna. No segundo momento, quando "chamamos" a função passando os valores que ela precisa, é que ela é executada. A função não vai ser nunca executada se não chamarmos!


1. Função sem retorno e sem parâmetro:
```js
function falar(){
  console.log('Olá mundo!')
}

falar()
```

2. Função sem retorno, com parâmetro:
```js
function saudacao(pessoa){
  console.log(`Bem vinda ${pessoa}!`)
}

saudacao('Helena')
```

3. Função com retorno, sem parâmetro:
```js
function escreverOlar(){
  return 'oi gente!'
}

function escreverOlarPraAlguem(nomePessoa) {
  console.log(`${escreverOlar()} Meu nome é ${nomePessoa}`)
}

escreverOlarParaAlguem('Helena')
```

4. Função com mais de um parâmetro:
```js
function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3
}

operacaoMatematica(1, 1, 1)
```

#### Return x Console

Qual a diferença entre `return` e `console.log()`?

O `console.log` significa, traduzindo do inglês, "registro no console". Ou seja, é somente um registro pra gente que está desenvolvendo obter alguma informação do código, mas *o `console.log()` não influencia no código, é só pra dar informação!*

Já o `return` é o comando que usamos quando realmente precisamos que a função "mande pra fora dela" algum dado que precisamos usar em outra parte do código. Ele deve ser sempre a última coisa a ser escrita na última linha antes de fechar a função, pois tudo que vem depois desse comando é ignorado pelo JS.


### Laços

São comandos que mantém um código sendo executado até que uma condição de parada seja satisfeita.

#### while

Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada como verdadeira.

```js
 while (condicao) {
    código aqui;
 }
```

*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.*


```js
const readline = require('readline-sync')

let num = readline.question('Digite um número entre 0 e 10: ')

while (num > 9 || num <= 1) { //Enquanto a condição for satisfeita, ele entra no loop
    num = readline.question('Digite um número entre 0 e 10: ')
}
```

#### do-while

A instrução do-while repetirá até que a condição especificada seja falsa. O corpo é sempre executado pelo menos uma vez, independente da condição, pois primeiro ele faz do e depois testa a condição.

```js
const readline = require('readline-sync')

let num;

do{
  num = readline.question('Digite um número entre 0 e 10: ')
}while(num > 9 || num <= 1)
```

*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*

#### for
Você pode pensar em um laço de repetição como um jogo onde você manda o seu personagem andar X passos.

```javascript
let passo;
for (passo = 1; passo <= 5; passo++) {
  // Executa 5 vezes, com os valores de passos de 1 a 5.
  console.log('já dei '+passo+' passos');
}
// já dei 1 passos
// já dei 2 passos
// já dei 3 passos
// já dei 4 passos
// já dei 5 passos
```