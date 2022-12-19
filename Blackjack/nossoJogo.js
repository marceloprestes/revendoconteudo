/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 *  * 
 * 
 * 
 */
console.log("Bem-vindo(a), ao jogo de BlackJack")
let jogo = confirm("Quer iniciar uma nova rodada                                     ")    

if (jogo){
   let cartaOneUser = comprarCarta()
   let cartaTwoUser = comprarCarta()
   let cartaOnePC = comprarCarta()
   let cartaTwopc = comprarCarta()

   let pontuacaoUser = cartaOneUser.valor + cartaTwoUser.valor
   let pontuacaoPc = cartaOnePC.valor + cartaTwopc.valor
   
   console.log(`Usuário - cartas: ${cartaOneUser.texto}
    ${cartaTwoUser.texto} 
   - ${pontuacaoUser}`)

   console.log(`Computador - cartas: ${cartaOnePC.texto}
    ${cartaTwopc.texto} 
   - ${pontuacaoPc}`)


   if(pontuacaoUser > pontuacaoPc) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoUser < pontuacaoPc) {
         console.log("O computador ganhou!")
   } else if (pontuacaoUser === pontuacaoPc) {
      console.log("Empate")
   }




} else {
   console.log("O Jogo finalizou")
}






const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
