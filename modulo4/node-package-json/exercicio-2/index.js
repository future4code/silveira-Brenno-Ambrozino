// Exercício 2

const operacao = process.argv[2]
const primeiroNumero = Number(process.argv[3])
const segundoNumero = Number(process.argv[4])

const operacoes = () => {
    if(operacao === "add") {
        return primeiroNumero + segundoNumero
    } else if (operacao === "sub") {
        return primeiroNumero - segundoNumero
    } else if (operacao === "mult") {
        return primeiroNumero * segundoNumero
    } else if (operacao === "div") {
        return primeiroNumero / segundoNumero
    } else {
        return "Ocorreu algum problema, tente novamente :)"
    }
}
const resultado = operacoes()
console.log(resultado)