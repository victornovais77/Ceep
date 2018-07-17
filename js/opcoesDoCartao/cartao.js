; (function () {

    const cartoes = document.querySelectorAll('.cartao')


    for (let cartao of cartoes) {

        cartao.addEventListener('focusin', function () {
            cartao.classList.add("cartao--focado")
        })

        cartao.addEventListener('focusout', function () {
            cartao.classList.remove("cartao--focado")
        })


        cartao.addEventListener('change', function (event) {

            const elementoClicado = event.target;

            const isRadioTipo = elementoClicado.classList.contains('opcoesDoCartao-radioTipo');

            if (isRadioTipo) {
                console.log(isRadioTipo, elementoClicado.value)
                const corNovaDoCartao = elementoClicado.value
                cartao.style.backgroundColor = corNovaDoCartao
            }
        })

        cartao.addEventListener('keypress', function (event) {
            const ElementoAtivo = event.target;

            const isOpcaoDoCartao = ElementoAtivo.classList.contains('opcoesDoCartao-opcao')

            if (isOpcaoDoCartao && (event.key == 'Enter' || ' ')) {
                ElementoAtivo.click();
            }
        })


        cartao.addEventListener('click', function (event) {
            const Elementocartoes = event.target;

            const isExclueCartao = Elementocartoes.classList.contains('opcoesDoCartao-remove')
            if(isExclueCartao){
                cartao.classList.add("cartao--some");
                cartao.addEventListener("transitionend", function () {
                    cartao.remove();
                })
            }
        })

    }

})()