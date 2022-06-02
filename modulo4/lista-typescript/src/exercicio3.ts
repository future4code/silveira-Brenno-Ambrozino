enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type movie = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
}

const movies =( name:string, year:number, genre:GENERO, points?:number): movie => {
    if(points){
        return{
        nome: name,
        anoLancamento: year,
        genero: genre,
        pontuacao: points
        }
    } else {
        return{
            nome: name,
            anoLancamento: year,
            genero: genre
        }
    }
}

console.log(movies("Pedra Filosofal", 2001, GENERO.ACAO, 88))