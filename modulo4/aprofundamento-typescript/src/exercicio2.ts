// Exercício 2 //

//a) A função recebe um array e retorna um objeto / c)

type amostraDeDados = {
    numeros:number[],
    obterEstatisticas:{
        soma:number, 
        maior:number,
        menor:number,
        media:number
    }
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor: number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1,2]))

// b) numeros: number[]
// soma:number
// estatisticas:{maior:number, menor: number, media:number}

