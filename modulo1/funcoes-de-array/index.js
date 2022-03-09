// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //
// 1. 
// a)
// [
// { nome: "Amanda Rangel", apelido: "Mandi" },
// { nome: "Laís Petra", apelido: "Laura" },
// { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// 
// 2.
// a) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
// 
// 3.
// a) [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
// ]

// EXERCÍCIOS DE ESCRITA DE CÓDIGO //
// EXERCÍCIO 1 //
console.log('EXERCÍCIO 1');
console.log('a)');
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
];

const nomePets = pets.map((item, index, array) => {
    return item.nome
});

console.log(nomePets);
console.log('b)');

const somenteSalsicha = pets.filter((item, index, array) =>{
    return item.raca === 'Salsicha'
});

console.log(somenteSalsicha);
console.log('c)');

const somentePoodle = pets.filter((item, index, array) =>{
    return item.raca === 'Poodle'
});

const nomesPoodle = somentePoodle.map((item, index, array) =>{
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
});

console.log(nomesPoodle);
console.log(' ');

// EXERCÍCIO 2 //
console.log('EXERCÍCIO 2');

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
];

console.log('a)');

const arrayDeNomes = produtos.map((item, index, array) =>{
    return item.nome
});

console.log(arrayDeNomes);
console.log('b)');


const arrayComDesconto = produtos.map((item, index, array) =>{
    return {nome: item.nome, preco: (item.preco * 95/100)}
});

console.log(arrayComDesconto);
console.log('c)');

const arrayBebidas = produtos.filter((item, index, array) =>{
    return item.categoria === 'Bebidas'
});

console.log(arrayBebidas);
console.log('d)');

const arrayYpe = produtos.filter((item, index, array) =>{
    return item.nome.includes('Ypê')
});

console.log(arrayYpe);
console.log('e)');

const anuncio = arrayYpe.map((item, index, array) =>{
    return `Compre ${item.nome} por ${item.preco} `
});

console.log(anuncio);