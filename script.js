let text = document.querySelector("#text-input")
let textOnPhoto = document.querySelector("#meme-text")
let imagem = document.querySelector("#image-insert")
let imagemPhoto = document.querySelector("#meme-insert")


text.addEventListener("change", function(){
    textOnPhoto.innerText = text.value
})
imagem.addEventListener("input", function(){
    imagemPhoto.src = URL.createObjectURL(event.target.files[0])
})
