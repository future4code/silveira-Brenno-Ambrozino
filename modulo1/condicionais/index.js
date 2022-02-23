// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// 1.
// a) O código define se o número é par ou não; 
// b) Apenas números pares
// c) Apenas números ímpares
// 
// 2.
// a) Para informar o preço da fruta solicitada
// b) 'O preço da fruta Maçã é 2.25'
// c) 'O preço da fruta Pêra é 5'
// 
// 3.
// a) Está solicitando um número
// b) 
// numero = 10
// "Esse número passou no teste"
// erro
// 
// numero = -10 
// err0
// 
// c) Houve um erro, a variavel 'mensagem' só está disponível dentro do escopo

// EXERCÍCIOS DE ESCRITA DE CÓDIGO // 
// EXERCÍCIO 1 //
console.log('EXERCÍCIO 1');

let idade = +prompt('Insira sua idade');

if (idade >= 18) {
    console.log('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
};

console.log(' ');

// EXERCÍCIO 2 //
console.log('EXERCÍCIO 2');

let turno = prompt('Digite o turno que você estuda');
if (turno === 'M') {
    console.log('Bom Dia!')
} else if (turno === 'V') {
    console.log('Boa Tarde!')
} else if (turno ==='N') {
    console.log('Boa Noite!')
};

console.log(' ');

// EXERCÍCIO 3 //
console.log('EXERCÍCIO 3')

let mensagem
switch (turno) {
    case 'M':
        mensagem = 'Bom Dia!'
        break;
    case 'V':
        mensagem = 'Boa Tarde!'
        break;
    case 'N':
        mensagem = 'Boa Noite!'
        break;
};

console.log(mensagem);

console.log(' ');

// EXERCÍCIO 4 //
console.log('EXERCÍCIO 4');

let genero = prompt('Insira o gênero do filme');
let ingresso = +prompt('Insira o preço do ingresso');

if (genero === 'fantasia', ingresso < 15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
};




