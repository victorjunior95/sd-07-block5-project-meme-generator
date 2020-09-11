

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

let prememe = document.querySelectorAll(".prememe")
for (let i = 0; i < prememe.length; i += 1) {
    prememe[i].addEventListener("click", prememef)
}
function prememef() {
    let memeImage = document.querySelector("#meme-image")
    console.log(event.target.id)
    switch (event.target.id) {
        case "meme-1": memeImage.src = "/img1.jpg"
        break
        case "meme-2": memeImage.src = "/img2.jpg"
        break
        case "meme-3": memeImage.src = "/img3.jpeg"
        break
        case "meme-4": memeImage.src = "/img4.jpg"
        break
    }

}


let saidaTexto = document.getElementById('meme-text');
function trocaTextoA () {
    
    saidaTexto.innerText = caixaTexto.value;
  }
saidaTexto.addEventListener('click', trocaTextoA);