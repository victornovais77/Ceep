
// IIFE ( e o danado do ponto e virgula? )
// Bolhas e JavaScript
;(function() {

    const cartoes = document.querySelectorAll('.cartao')

    for(let cartao of cartoes) {
        console.log(cartao)






    } // Fim do for
    

})()


// [Testem essas opções de evento]
// keypress: 
// keydown
// keyup
// input
// cartao.addEventListener('keydown', function(evento) {
//     console.log('keydown')
// })
// cartao.addEventListener('keyup', function(evento) {
//     console.log('keyup')
// })
// cartao.addEventListener('keypress', function(evento) {
//     console.log('keypress')
// })
// cartao.addEventListener('input', function(evento) {
//     console.log('input')
// })