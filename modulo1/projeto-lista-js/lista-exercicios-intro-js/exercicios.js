// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
};

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!');

  console.log(mensagem);
};

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  altura = +prompt(`Altura do retângulo`);
  largura = +prompt(`Largura do retângulo`);
  console.log(altura * largura);
};

// EXERCÍCIO 02
function imprimeIdade() {
  anoA = +prompt(`Em que ano estamos?`);
  anoN = +prompt(`Em que ano você nasceu?`);
  console.log(anoA - anoN);
};

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura * altura);
  return imc;
};

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt(`Digite seu nome`);
  idade = prompt(`Digite sua idade`);
  email = prompt(`Digite seu email`);
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
};

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  cor1 = prompt(`Primeira cor favorita`);
  cor2 = prompt(`Segunda cor favorita`);
  cor3 = prompt(`Terceira cor favorita`);
  console.log([`${cor1}`, `${cor2}`, `${cor3}`]);
};

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
};

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  ingressos = custo / valorIngresso;
  return ingressos;
};

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
};

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
};

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
};

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let c; 
  c = array[0];
  array.splice(0, 1, array[array.length - 1]);
  array.splice(array.length - 1, 1, c);
  return array;
};

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase();
};

// EXERCÍCIO 13
function checaRenovacaoRG() {

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}