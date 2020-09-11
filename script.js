let memeTela = document.querySelector("#meme-image-container")


let areaTexto = document.querySelector("#text-input")
areaTexto.addEventListener("change", textoMeme)


function textoMeme(){
    let memeTelaTexto = document.querySelector("#meme-text")
    memeTelaTexto.innerHTML = areaTexto.value
}
