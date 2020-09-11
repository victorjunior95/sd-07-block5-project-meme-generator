let text = document.querySelector("#text-input")
let textOnPhoto = document.querySelector("#meme-text")
let imagem = document.querySelector("#image-insert")
let imagemPhoto = document.querySelector("#meme-image")

function maxText(){
    if(text.value.split('').length <= 60){
        return text.value
    }
    else{
        alert("O máximo é de 60 letras!")
        return null
    }
}

text.addEventListener("change", function(){
    textOnPhoto.innerText = maxText()
})
imagem.addEventListener("input", function(){
    imagemPhoto.src = URL.createObjectURL(event.target.files[0])
})
