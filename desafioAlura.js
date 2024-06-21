// respondendo questão 1
console.log = ('Boas Vindas');

// questão 2
let nome = 'Patrícia';
console.log(`Òlá ${nome}`);

// Questão 3
let nome2 = 'Patricia';
alert (`Olá ${nome2}`);

// Questão 4
let linguagemPreferida = prompt ('Qual a linguagem de programação você mais gosta?');
console.log (linguagemPreferida);

// Questão 5 calculando a soma de um número
let valor1 = 25;
let valor2 = 10;
let resultadosoma = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} o resultado é igual a: ${resultado}`);

// Questão 6 calculando a diferença de um número
let primeiroValor = 50;
let segundoValor = 15;
let resultadoDiferença = primeiroValor - segundoValor;
console.log(`A diferença de ${primeiroValor} e ${segundoValor} é igual a:`);

// Questão 7  
let idade = prompt ('Digite a sua idade');
if (idade > 17 ){
    console.log ('Você é maior de idade');
}else {
    console.log('Você é menor de idade');
}
// Questão 8 Verificar se o numero é positivo negativo ou zero
let numero = prompt ('Digite um número');
if ( numero > 0){
    console.log('O número é positivo');
}else if (numero < 0 ){
    console.log(' O número é negativo');
}else {
    console.log(' O número é zero');
} 
// Questão 9 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é
//  maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10;
if (nota >= 7){
    console.log('Aprovado');
}else {
    console.log('Reprovado');
}
// questão 10 Use um loop while para imprimir os números de 1 a 10 no console
let cont = 1;
while (cont >= 1){
    console.log(cont)
    cont++;
}
// Questão 11 Use o Math.ramdonpara gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Questão 12 Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroAleatorioInteiro = parseInt (Math.random () * 10) + 1
console.log (numeroAleatorioInteiro);

// Questão 13 Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroAleInteiro = parseInt (Math.random() * 1000) + 1 ;
console.log (numeroAleInteiro);




