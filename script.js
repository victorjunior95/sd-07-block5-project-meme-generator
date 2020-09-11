

let areaTexto = document.querySelector("#text-input")
areaTexto.addEventListener("input", textoMeme)

function textoMeme(){
    let memeTelaTexto = document.querySelector("#meme-text")
    memeTelaTexto.innerHTML = areaTexto.value
}

let inputImg = document.querySelector("#meme-insert")
inputImg.addEventListener("change",imgUse)

function imgUse(){
    console.log("funciona carai")
    let memeTela = document.querySelector("#meme-image-container")

    console.log(inputImg)
    let memeImage = document.querySelector("#meme-image")
    memeImage.src = URL.createObjectURL(event.target.files[0])
}





let saidaTexto = document.getElementById('meme-text');
function trocaTextoA () {
    
    saidaTexto.innerText = caixaTexto.value;
  }
saidaTexto.addEventListener('click', trocaTextoA);