// IIFE (Encapsulamento, Deixando o código privado)
;(function() {
"use strict"
// Evitar variaveis globais
// Evitar objetos com chaves duplicada
// const teste = {
//     nome: 'Mario',
//     nome: 'Fulano'
// }

// CÓDIGO VAI AQUI

// Desafio: Pegar infos do servidor e criar cartões
// http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto
// Vai dar um erro
    // Stackoverflow
    // Forum da Alura
    // Onde vcs quiserem
// 25 minutos


$.ajax({
    method: 'GET',
    dataType: 'jsonp',
    url: 'http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto',
    success: function(resposta) {
        resposta.cartoes.forEach(function(ajudaAtual, indice) {
            adicionaCartaoNoMural(ajudaAtual)
        })
    }
})

/* <script>
function umaFuncaoProntaPraSerExecutada(respostaDoServer) {
  console.log(respostaDoServer)
}
</script>
<script src="http://ceep.herokuapp.com/cartoes/carregar?usuario=omariosouto&callback=umaFuncaoProntaPraSerExecutada"></script> */


// CÓDIGO VAI AQUI

// Privado
let numeroDoCartao = document.querySelectorAll('.cartao').length

// Publico
window.adicionaCartaoNoMural = function adicionaCartaoNoMural(cartaoObj) {
    numeroDoCartao++
    // Criar os cartões
    // Pegando o Valor do Textarea
    const valorDoTextArea = cartaoObj.conteudo
    // Criando HTML de forma Declarativa
    // const tplCartao = document.createElement("tpl")
    // Copia o código do HTML com o copy `outerHTML`
    const cartao = $(`
    <article id="cartao_${numeroDoCartao}" style="background: ${cartaoObj.cor};" class="cartao" tabindex="0">
    <div class="opcoesDoCartao">
      <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
        <svg><use xlink:href="#iconeRemover"></use></svg>
      </button>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked="">
      <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
        Padrão
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
        Importante
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
        Tarefa
      </label>

      <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
      <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
        Inspiração
      </label>
    </div>
    <p class="cartao-conteudo" contenteditable="" tabindex="0">${valorDoTextArea}</p>
  </article>
    `)

    // Evento de Focus do Cartão
    cartao.on('focusin', function() {
        console.log('focou em')
        // classList.add
        cartao.addClass('cartao--focado')
    })
    // addEventListener
    cartao.on('focusout', function() {
        console.log('desfocou em')
        // classList.remove
        cartao.removeClass('cartao--focado')
    })

    // Mudança de cor
    // 1 - Adiciona o evento
    cartao.on('change', function(evento) {
        const elementoClicado = evento.target

        const isRadioTipo = elementoClicado.classList.contains('opcoesDoCartao-radioTipo')
        if(isRadioTipo) {
            // 2 - Pegar a cor do value do input
            console.log(isRadioTipo, elementoClicado.value)
            const corNovaDoCartao = elementoClicado.value
            // 3 - Trocar a cor do background do cartão
            cartao.css('background', corNovaDoCartao)
        }
    })

    // Muda cor pelo Keypress
    cartao.on('keypress', function(evento) {
      const elementoAtivoAgoraNow = evento.target
      const isOpcaoDoCartao = elementoAtivoAgoraNow.classList.contains('opcoesDoCartao-opcao')
      const isEnterOuEspaco = (evento.key == 'Enter' || evento.key == ' ')
      if(isOpcaoDoCartao && isEnterOuEspaco ) {
          elementoAtivoAgoraNow.click() // Forçando um click
      }
    })

    // # Desafio
    // Remover o cartão usando a técnica do delegate
    // adiciona o evento no cartao e verifica quem foi clicado
    // colocar código exatamente aqui
    cartao.on('click', function(evento) {
        const elementoClicado = evento.target
        const isRemoveCartao = elementoClicado.classList.contains('opcoesDoCartao-remove')
        
        if(isRemoveCartao) {
            cartao.addClass('cartao--some')
            cartao.on('transitionend', function() {
                cartao.remove()
            })
        }
    })


    $('.mural').prepend(cartao) 
}

})()