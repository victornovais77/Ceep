

// Hoisting === 

// Instala o autofilename
// console.dir(document.querySelector('#btnMudaLayout'))
const exemplo = 'mario'
const mural = document.querySelector('.mural')
const btn = document.querySelector('#btnMudaLayout')

// # Objeto
// btn = {
//     textContent: 'Linhas',
//     onclick: undefined
// }
// CallBack
// btn.onclick = trocaOTextoDoBotao
btn.addEventListener('click', trocaOTextoDoBotao)
// btn.onclick = mudaLayout
btn.addEventListener('click', mudaLayout)

function trocaOTextoDoBotao() {
    if(btn.textContent == 'Blocos') {
        btn.textContent = 'Linhas'
    } else {
        btn.textContent = 'Blocos'
    }
}

function mudaLayout() {
    mural.classList.toggle('mural--linha')
}

// function toggle(classDoElemento) {
//     if(!mural.classList.contains(classDoElemento)) {
//         // console.log(mural.classList.contains(classDoElemento))
//         mural.classList.add(classDoElemento)
//         // console.log(mural.classList.contains(classDoElemento))
//     } else {
//         mural.classList.remove(classDoElemento)
//     }
// }


// Progressive Enhancement
btn.classList.remove('no-js')

// Vamos mudar o layout krai!
// - evento de click atrelado no botao

// *mexer com estilo tambem



// - adiciona uma classe css ou remover (mural--linha)
//     - se tiver linhas vira bloco
//     - se tiver bloco vira linhas
