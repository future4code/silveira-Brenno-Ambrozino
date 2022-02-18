// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// 1.
// a)
// '10';
// '50';
// b)
// Não apareceria nada;
//
// 2.
// a) Essa função coloca todas as letras no minúsculo e confere se o texto possui a palavra 'cenoura', retornando true ou false;
// b)
// true;
// true;
// true;

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //
//1.
//a)
console.log(`EXERCÍCIO 1`);
console.log(`a)`)

function imprimir(frase1) {
    console.log(frase1);
};

imprimir(`Eu sou Brenno, tenho 20 anos, moro em Itaboraí e sou estudante`);


//b)
console.log(`b)`);

function fraseAlterada(nome, idade, cidade, profissão) {
    const frase2 = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`;
    return frase2;
};

console.log(fraseAlterada('Brenno', '20', 'Itaboraí', 'estudante'));

console.log(``);

// 2.
// a)
console.log(`EXERCÍCIO 2`);
console.log(`a)`);

function soma(a, b) {
    const resultado = a + b;
    console.log(resultado); 
    return resultado;
};

soma(3, 4);

// b)
console.log(`b)`);

function maior(a, b) {
    console.log(a > b);
};

maior(5, 3);

//c)
console.log(`c)`);

function par(numero) {
    let divisao = (numero % 2);
    console.log(divisao === 0);
    return divisao;

};

par(2);

// d)
console.log(`d)`);

function tamanhoVersao(mensagem) {
    console.log(mensagem.length);
    console.log(mensagem.toUpperCase());
};

tamanhoVersao(`ola`);

console.log(` `);

// EXERCÍCIO 3 //
console.log(`EXERCÍCIO 3`);

function soma(a, b) {
    const somei = a + b;
    console.log(`Soma: ${somei}`);
    return somei;
};

function diferenca(a, b) {
    const diminui = a - b;
    console.log(`Diferença: ${diminui}`);
    return diminui;
};

function multiplicacao(a, b) {
    const vezes = a * b;
    console.log(`Multiplicaçao: ${vezes}`);
    return vezes;  
};

function divisao(a, b) {
    const dividi = a / b;
    console.log(`Divisão: ${dividi}`);
};

n1 = +prompt(`Digite um número`);
n2 = +prompt(`Digite outro número`);

console.log(`Números inseridos: ${n1} e ${n2}`);
soma(n1, n2);
diferenca(n1, n2);
multiplicacao(n1, n2);
divisao(n1, n2);










