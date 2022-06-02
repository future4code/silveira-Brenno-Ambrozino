// Exercício 1 //

// a) const minhaString:string = 2
//    É sinalizado o erro

// b)
const meuNumero: number | string = 2

// c) / d)

enum ArcoIres {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoas = {
    nome: string,
    idade: number,
    corFavorita: ArcoIres
}

const pessoa: Pessoas = {
    nome: "brenno",
    idade: 20,
    corFavorita: ArcoIres.ANIL
} 

const pessoa2: Pessoas = {
    nome: "karina",
    idade: 42,
    corFavorita: ArcoIres.VIOLETA
} 

const pessoa3: Pessoas = {
    nome: "leandro",
    idade: 41,
    corFavorita: ArcoIres.VERMELHO
} 

const pessoa4: Pessoas = {
    nome: "ryann",
    idade: 14,
    corFavorita: ArcoIres.AZUL
} 



