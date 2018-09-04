// IIFE
;(function() {
    
    const btnAjuda = document.querySelector('#btnAjuda')

    btnAjuda.addEventListener('click', function() {
        // (AJAX) 
        // Acessa a URL
        // http://ceep.herokuapp.com/cartoes/instrucoes
        const pegaAjudas = new XMLHttpRequest()
        pegaAjudas.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes')
        pegaAjudas.responseType = 'json'
        pegaAjudas.send()
        // dispara o preload
        // pegaAjudas.addEventListener('error', function() {})
        pegaAjudas.addEventListener('load', function() {
            // para o preload
            // Pega os dados
            console.log(pegaAjudas)
            // const ajudas = JSON.parse(pegaAjudas.responseText).instrucoes // Deserialização
            const ajudas = pegaAjudas.response.instrucoes
            // Trata e Devolve / Joga os dados na tela
            ajudas.reverse().forEach(function(ajudaAtual, indice) {
                adicionaCartaoNoMural(ajudaAtual)
            })
        })

        // function forEach(funcao) {
        //     // acesso ao nosso array
        //     for(let ajudaAtual of ajudas) {
        //         funcao(ajudaAtual)
        //     }   
        // }

        // for(let ajudaAtual of ajudas) {
        //     alert(ajudaAtual)
        // }
    })

    $(btnAjuda).removeClass('no-js')
    // btnAjuda.classList.remove('no-js')

    // console.log('Elemento puro', btnAjuda)
    // console.log('Elemento convertido', $(btnAjuda))
})()