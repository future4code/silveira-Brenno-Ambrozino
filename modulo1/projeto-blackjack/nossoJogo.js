console.log('Boas vindas ao jogo de Blackjack!');

if(confirm('Quer iniciar uma nova rodada?')){
   let computador = [];
   let usuario = [];
   let i = 0;
   for(let i = 0; i < 2; i++){
      const carta = comprarCarta();
      computador.push(carta.texto);
      computador.push(carta.valor);
   };
   for(let i = 0; i < 2; i++){
      const carta = comprarCarta();
      usuario.push(carta.texto);
      usuario.push(carta.valor);
   };
   let somausuario = usuario[1] + usuario[3];
   let somacomputador = computador[1] + computador[3];
   console.log(`Usuário - cartas: ${usuario[0]} ${usuario[1]} e ${usuario[2]} ${usuario[3]} - pontuação ${somausuario}`);
   console.log(`Computador - cartas: ${computador[0]} ${computador[1]} e ${computador[2]} ${computador[3]} - pontuação ${somacomputador}`);
   
   if(somausuario > somacomputador){
      console.log(`O usuário ganhou!`);
   };
   if(somacomputador > somausuario){
      console.log(`O computador ganhou!`);
   };
   if(somacomputador === somausuario){
      console.log(`Empate!`)
   };

} else {
   console.log('O jogo acabou')
};

