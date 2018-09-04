// IIFE
;(function() {
    const form = document.querySelector('.formNovoCartao')
    // Criar os cartões

    // Single Page Application

    form.addEventListener('submit', function(evento) {
        // Previnir o comportamento Padrão
        evento.preventDefault()

        // Pegando o texto do cartao
        const textarea = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = textarea.value
        console.log(conteudo)
        const isTextAreaVazio = conteudo.length == 0

        if(isTextAreaVazio) {
            // alert('não digite vários nada')
            // <div class="formNovoCartao-msg">
            //     Não digite vários nada
            // </div>            
            const msgErro = document.createElement('div')
            msgErro.classList.add('formNovoCartao-msg')
            msgErro.textContent = 'Não digite vários nada'
            console.log(msgErro)

            document.querySelector('.formNovoCartao-salvar')
                    .insertAdjacentElement('beforebegin',msgErro)
                    // Porta de entrada entre o JS e o HTML da página

            msgErro.addEventListener('animationend', function() {
                msgErro.remove()
            })
        } else {
            const conteudoDoCartao = conteudo
            adicionaCartaoNoMural({ conteudo: conteudoDoCartao })
// qsuhdsauh
        } // fechamento do else
        document.querySelector('.formNovoCartao-conteudo').value = ''
        $('.formNovoCartao-conteudo').val('') 

       // 
       // temos que ter o HTML

    })


    form.classList.remove('no-js')
})()

            // - Analisar como os cartões são feitos
            // - Copiar Tag a Tag 
            // - pegar a variavel conteudo e jogar no HTML

            // Criando o article (De forma Imperativa)
            // <article id="cartao_${numeroDoCartao}" class="cartao" tabindex="0">
            // const article = document.createElement('article')
            // article.classList.add('cartao')
            // article.setAttribute('tabindex', '0') // tabindex="0"
            // article.setAttribute('id', 'cartao_${numeroDoCartao}')

            // article.textContent = valorDoTextArea