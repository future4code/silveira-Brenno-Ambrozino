// Exercício 1
// a)
// b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

const fraseB = `Olá, ${nome}! Você tem ${idade} anos.`

// console.log(fraseB)

// c)
const novaIdade = idade + 7
const fraseC = ` Em sete anos você terá ${novaIdade}.`

console.log(fraseB + fraseC)