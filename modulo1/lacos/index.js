// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// 1.
// 10
//
// 2.
// a)
// 19
// 21
// 23
// 25
// 27
// 30
// 
// b)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let maiores = ''
// for (let numero of lista) {
//   if (numero > 18) {
// 		maiores = `${maiores} ${numero}`
// 	}
// }
// console.log(`${maiores}`)
// 
// 3.
// *
// **
// ***
// ****

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //
// EXERCÍCIO 1 //
console.log('EXERCÍCIO 1');

let array = [];
bichinhos = +prompt('Quantos bichinhos de estimação você tem ?');
if(bichinhos === 0) {
    console.log( 'Que pena! VocÊ pode adotar um pet!')
} else {
    for (let vezes=0; vezes < bichinhos; vezes++) {
        nomes = prompt('digite o nome de 1 deles')
        array.push(nomes)
    }
    

};
console.log(array);
console.log(' ');

// EXERCÍCIO 2 //
console.log('EXERCÍCIO 2');
console.log('a)');
function imprimir(array) {
    for (let numero = 0; numero < array.length; numero++) {
        console.log(array[numero])
    }
}; 

console.log('b)');
function imprimirDividido(array) {
    for (let numero = 0; numero < array.length; numero++) {
        console.log(array[numero] / 10)
    }
}; 

console.log('c)');
function imprimirDividido(array) {
    let novoArray = []
    for (let numero = 0; numero < array.length; numero++) {
        if(array[numero] % 2 === 0) {
            novoArray.push(array[numero])
        }
    }
    console.log(novoArray) 
}; 

console.log('d)');

function imprimirString(array) {
    let newArray = []
    for (let numero = 0; numero < array.length; numero++) {
        newArray.push(`O elemento do índex ${numero} é ${array[numero]}`)
    }
    console.log(newArray)
};

console.log('e)');

function maiorEMenor(array) {
    let maior = 0
    for (let numero = 0; numero < array.length; numero++) {
        if(array[numero] > maior) {
            maior = array[numero]
        } 
    }
    let menor = 10000000000000
    for (let numero = 0; numero < array.length; numero++) {
        if(array[numero] < menor) {
            menor = array[numero]
        } 
    }
    console.log(`O maior número é ${maior} e o menor é ${menor}`)
};


