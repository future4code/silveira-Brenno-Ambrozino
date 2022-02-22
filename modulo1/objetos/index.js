// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// 1.
// a)
// Matheus Nachtergaele;
// Virginia Cavendish;
// {canal: 'Global', horario: '14h'};

// 2.
// a)
// {nome:'Juca', idade: 3, raca: 'SRD'};
// {nome: 'Juba', idade: 3, raca: 'SRD'};
// {nome: 'Jubo', idade: 3, raca: 'SRD'};
//
// b)
// Copia/imita o objeto;
// 
// 3. 
// a)
// false
// undefined
// 
// b) 
// "undefined" representa um valor que não foi definido, no caso a propriedade "altura" não foi definida;
// 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// EXERCÍCIO 1 //
console.log('EXERCÍCIO 1');
console.log('a)');

const pessoa = {
    nome: 'Amanda',
    apelidos: ['Amandinha', 'Mandinha', 'Mandi']
};

function dados(objeto) {
    console.log(`Eu sou Amanda, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
};

dados(pessoa);

console.log('b)');

const pessoa1 = {...pessoa, apelidos:['Amandoca', 'Amoeba', 'Mamona']};

dados(pessoa1);

console.log(' ');

// EXERCÍCIO 2 //
console.log('EXERCÍCIO 2');
console.log('a)');

const brenno = {
    nome: 'Brenno',
    idade: 20,
    profissão: 'Estudante'
};

const ryann = {
    nome: 'Ryann',
    idade: 13,
    profissão: 'Estudante'
};

console.log(brenno);
console.log(ryann);

console.log('b)');

function exercicio(individuo) {
    console.log([individuo.nome, individuo.nome.length, individuo.idade, individuo.profissão, individuo.profissão.length]);

};

exercicio(brenno);
exercicio(ryann);

console.log(' ');

// EXERCÍCIO 3 //

console.log('EXERCÍCIO 3');

var carrinho = [];

const fruta1 = {
    nome: 'morango',
    disponibilidade: true
}; 

const fruta2 = {
    nome: 'pera',
    disponibilidade: true
};

const fruta3 = {
    nome: 'abacate',
    disponibilidade: true
}; 

function comprar(fruta) {
    carrinho.push(fruta)
    return carrinho
};

comprar(fruta1);
comprar(fruta2);
comprar(fruta3);

console.log('d)')
console.log(carrinho)