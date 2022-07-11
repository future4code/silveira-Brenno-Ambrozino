const passagemDeAnos = (data:string): number => {
    const dataAtual = new Date()
    const [dia, mes, ano] = data.split("/")
    let anos = dataAtual.getFullYear() - Number(ano) 

    if (
        dataAtual.getMonth() + 1 < Number(mes)
        || 
        (dataAtual.getMonth() + 1 === Number(mes)
        &&
        dataAtual.getDate() < Number(dia)
        )
        ) {
        anos--
    }

    return anos 
}

const checarVencimento = (nascimento:string, emissao:string):boolean => {
    let precisaRenovar= false
    const idade = passagemDeAnos(nascimento)
    const tempoDeEmissao = passagemDeAnos(emissao)

    if (idade <= 20 && tempoDeEmissao >= 5) {
        precisaRenovar = true
    } else if ( idade > 20 && idade <=50 && tempoDeEmissao >= 10) {
        precisaRenovar = true
    } else if ( idade > 50 && tempoDeEmissao >= 15) {
        precisaRenovar = true
    }
    // - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
    // - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
    // - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
    return precisaRenovar
}

console.log(checarVencimento("13/06/2001", "12/05/2014"))