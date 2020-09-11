let text = document.querySelector("#text-input")

text.addEventListener("keyup", function () {
    let textInput = document.querySelector("#text-input").value
    let memeText = document.querySelector("#meme-text")
    memeText.innerText = textInput
})
let = conteiner = document.querySelector("#meme-image-container")
let image = document.querySelector("#meme-image")
image.style.width = conteiner.style.width
image.style.height = conteiner.style.height

