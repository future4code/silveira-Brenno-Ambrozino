// Exercício 4 //
// a)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}
console.log(pokemon2)

// b) usaria o comando "tsc exercicio4.ts && node exercicio4.js"
// c) usaria o comando "tsc ./src/exercicio4 && node ./build/exercicio4.js."
// d) usando o espaço entre os nomes dos arquivos ou o comando tsc sem parâmetros que transpila todos

// Exercício Extra //
// a) A versão que utilizamos é a "es6" e a apresentada é a "es5"
