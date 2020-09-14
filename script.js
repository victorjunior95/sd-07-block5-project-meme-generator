let text = document.querySelector("#text-input")
let textOnPhoto = document.querySelector("#meme-text")
let imagem = document.querySelector("#meme-insert")
let imagemPhoto = document.querySelector("#meme-image")
let howToUse = document.querySelector(".howToUse")
let image1 = document.querySelectorAll("img")[1]
let image2 = document.querySelectorAll("img")[2]
let image3 = document.querySelectorAll("img")[3]
let image4 = document.querySelectorAll("img")[4]


text.addEventListener("keyup", function(){
    return textOnPhoto.innerText = text.value
})
imagem.addEventListener("change", function(){
    return imagemPhoto.src = URL.createObjectURL(event.target.files[0])
})

image1.addEventListener("click", function(){
    imagemPhoto.src = image1.src
})
image2.addEventListener("click", function(){
    imagemPhoto.src = image2.src
})
image3.addEventListener("click", function(){
    imagemPhoto.src = image3.src
})
image4.addEventListener("click", function(){
    imagemPhoto.src = image4.src
})