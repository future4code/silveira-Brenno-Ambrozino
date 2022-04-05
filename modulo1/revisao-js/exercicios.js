// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length;
};

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
};

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function(a, b) {
      return a - b;
  });
  return array
};

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray = array.filter((item, index, array) => {
      return item % 2 === 0
  })
  return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = array.filter((item, index, array) => {
        return item % 2 === 0
    })
    let novoArray2 = novoArray.map((item, index, array) => {
        return item * item 
    })
    return novoArray2
};

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for (let numero = 0; numero < array.length; numero++) {
        if(array[numero] > maior) {
            maior = array[numero]
        } 
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    };
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero

    const objeto = {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
    }
    return objeto

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}