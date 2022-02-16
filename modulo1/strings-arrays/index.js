// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO //

// 1)
// a. undefined;
// b. null;
// c. 11;
// d. 3;
// e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13;
// f. 9;

// 2)
// SUBI NUM ÔNIBUS EM MIRROCOS 27


// EXERCÍCIOS DE ESCRITA DE CÓDIGO //

// 1)
email = prompt('Digite seu e mail');
nome = prompt('Digite seu nome');

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}!`);

// 2)
let comidas = ['pizza', 'macarrao', 'nhoque', 'strogonoff', 'queijos'];

console.log('Essas são as minhas comidas preferidas:');
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

let comidaU = prompt('Digite sua comida favorita');
comidas[1] = comidaU;

console.log(comidas);

// 3)

let listaDeTarefas = [];

let tarefa1 = prompt('Digite 1 tarefa');
let tarefa2 = prompt('Digite 1 tarefa');
let tarefa3 = prompt('Digite 1 tarefa');

listaDeTarefas = [tarefa1, tarefa2, tarefa3];

console.log(listaDeTarefas);

let indice = prompt('Digite o índice da tarefa que ja foi realizada');

listaDeTarefas.splice(indice, 1);
console.log(listaDeTarefas);