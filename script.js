let text = document.querySelector("#text-input")
let textOnPhoto = document.querySelector("#meme-text")
let imagem = document.querySelector("#meme-insert")
let imagemPhoto = document.querySelector("#meme-image")


text.addEventListener("keyup", function(){
    return textOnPhoto.innerText = text.value
})
imagem.addEventListener("change", function(){
    return imagemPhoto.src = URL.createObjectURL(event.target.files[0])
})
