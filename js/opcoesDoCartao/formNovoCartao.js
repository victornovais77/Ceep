; (function () {

    const form = document.querySelector('.formNovoCartao')

    

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const textarea = document.querySelector('.formNovoCartao-conteudo')
        const conteudo = textarea.value;
        const isTextAreaVazio = conteudo.length == 0;

        if (isTextAreaVazio) {
            const msgErro = document.createElement('div')
            msgErro.classList.add('formNovoCartao-msg')
            msgErro.textContent = 'nao digite varios nada'
            console.log(msgErro)

            document.querySelector('.formNovoCartao-salvar')
                .insertAdjacentElement('beforebegin', msgErro);

            msgErro.addEventListener('animationend', function () {
                msgErro.remove();
            })
        } else {

            const conteudodoCartao = conteudo;
            adicionaCartaoNoMural({conteudo:conteudodoCartao})

        }
    })

})()