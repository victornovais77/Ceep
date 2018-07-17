;(function () {

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

    }


})()