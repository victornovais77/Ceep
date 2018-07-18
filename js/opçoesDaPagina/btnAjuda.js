(function(){
   
    const btnAjuda = document.querySelector("#btnAjuda")

    btnAjuda.addEventListener('click',function(){
      const ajudas = ['Cria Cartoes',
        'Deleta',
        'Muda Cor',
        'Ceep.Inc']
        ajudas.forEach(function(ajudaAtual){
            adicionaCartaoNoMural(ajudaAtual);
        });
    })


})()