
let contador = document.querySelectorAll('.opcoesDoCartao').length
function adicionaCartaoNoMural(conteudo){
    
    contador++
    const valorDoTextArea = conteudo;
    
    const cartao = $(`
                 <article id="cartao_${contador}" class="cartao"  tabindex="0"> 
                    <div class="opcoesDoCartao">
                        <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                          <svg>
                             <use xlink:href="#iconeRemover"></use>
                          </svg>
                        </button>
    
                        <input type="radio" name="corDoCartao${contador}" value="#EBEF40" id="corPadrão-cartao${contador}" class="opcoesDoCartao-radioTipo" checked>
                        <label for="corPadrão-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                            Padrão
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#F05450" id="corImportante-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corImportante-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                            Importante
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#92C4EC" id="corTarefa-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corTarefa-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                            Tarefa
                        </label>
    
                        <input type="radio" name="corDoCartao${contador}" value="#76EF40" id="corInspiração-cartao${contador}" class="opcoesDoCartao-radioTipo">
                        <label for="corInspiração-cartao${contador}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                            Inspiração
                        </label>
                    </div>
                    <p class="cartao-conteudo" contenteditable="" tabindex="0">${valorDoTextArea}</p>
                </article>
                 
                 `)
    
    //const cartao = tlpCartao.querySelector('.cartao')
    console.log(cartao)
    
    cartao.on('focusin', function () {
        cartao.addClass("cartao--focado")
    })
    
    cartao.on('focusout', function () {
        cartao.removeClass("cartao--focado")
    })
    
    cartao.on("change", ".opcoesDoCartao-radioTipo", function mudarCor(event) {
        cartao.css("background-color", event.target.value)
    })
    
    cartao.on('keypress', function deixaClicarComEnter(event) {
        if (event.target.classList.contains("opcoesDoCartao-opcao") &&
            (event.key == "Enter" || event.key == " ")) {
            event.target.clck();
    
        }
    })
    
    cartao.on('click', function (event) {
        const elementoSeelcionado = event.target;
    
        if (elementoSeelcionado.classList.contains('opcoesDoCartao-remove')) {
            cartao.addClass("cartao--some")
            cartao.on("transitionend", function () {
                cartao.remove();
            })
        }
    })
    
    $('.mural').prepend(cartao)
    $('.formNovoCartao-conteudo').val("")  
}