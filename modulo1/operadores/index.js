// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1 //
/* 
a. false
b. false
c. false
d. boolean
*/

// 2 //
/* 
Nesse caso sem o '+' o numero seria lido como script e não como número;
*/

// 3 //
/*
O problema é que não foi colocado o símbolo '+' ou 'Number()' antes do prompt;
*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO //

// 1 //
let idade = +prompt('Qual a sua idade?');
let idadeA = +prompt('Qual a idade do(a) seu melhor amigo(a)?');

const maiorI = idade > idadeA;

console.log('Sua idade é maior do que a do seu amigo?', maiorI);

console.log('Diferença de idade:', idadeA - idade);

// 2 //
let numeroP = +prompt('Insira um número par');

console.log( numeroP % 2);
// Já que todo número par é divisível por 2, todos os restos resultam em '0' // ;
// se for colocado um número ímpar, todo o resto será 1 //;

// 3 //
let dias = 365;
let horas = 365 * 24;

console.log(idade * 12, 'meses');
console.log(idade * 365, 'dias');
console.log(horas, 'horas');

// 4 //
let numero1 = +prompt('Digite um número');
let numero2 = +prompt('Digite outro número');

console.log('O primeiro número é maior que o segundo?', numero1 > numero2);
console.log('O primeiro número é igual ao segundo?', numero1 === numero2);
console.log('O primeiro número é divisível pelo segundo?', numero1 % numero2 === 0);
console.log('O segundo número é divisível pelo primeiro?', numero2 % numero1 === 0);