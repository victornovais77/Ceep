(function(){
   
    const btnAjuda = document.querySelector("#btnAjuda")

    btnAjuda.addEventListener('click',function(){
      const ajudas = [{conteudo:'Voce pode Criae Cartoes',cor:'red'},
        {conteudo:'Deleta Cartoes', cor: 'green'},

    ]
        ajudas.reverse().forEach(function(ajudaAtual, indice){
            adicionaCartaoNoMural(ajudaAtual);
        })
    })


})()