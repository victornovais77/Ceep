// IIFE
;(function() {
    "use strict"
    const btnSync = $("#btnSync")

    btnSync.on('click', function() {
        // Temos que pegar os cartões
        const cartoes = []

        $('.cartao').each(function(indice, elemento) {
            // console.log(elemento.textContent)
            const cartao = {}
            cartao.conteudo = $(elemento).find('p').text()
            cartao.cor = $(elemento).css('background')

            cartoes.push(cartao)
        })
        console.log(cartoes)
     
        const infosDoMural = {
            cartoes: cartoes,
            usuario: 'omariosouto'
        }
        // Salvar os cartoes no servidor
        const xhr = new XMLHttpRequest()
        xhr.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar')
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify(infosDoMural))

        xhr.addEventListener('load', function() {
            console.log('Será que deu certo?', xhr)
        })
// Consultar: http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto




    })
    btnSync.removeClass('no-js')
})()