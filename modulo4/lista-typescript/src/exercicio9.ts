const fatoraAnagramas = (palavra:string): number => {
    let anagramas = 1
    const letras = palavra.length

    for( let i = letras; i >= 1; i--){
        anagramas *= i
    }

    return anagramas
}

console.log(fatoraAnagramas("mesa"))