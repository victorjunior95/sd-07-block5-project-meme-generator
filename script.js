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

let buttonFire = document.querySelector("#fire")

buttonFire.addEventListener("click", function () {

    let backGroundCont = document.querySelector("#meme-image-container")
    backGroundCont.style.border = `3px red dashed`
})
let buttonWater = document.querySelector("#water")
buttonWater.addEventListener("click", function () {

    let backGroundCont2 = document.querySelector("#meme-image-container")
    backGroundCont2.style.border = `3px blue double`
 })
let buttonEarth = document.querySelector("#earth")
buttonEarth.addEventListener("click" ,function(){
    
    let backGroundCont3 = document.querySelector("#meme-image-container")
    backGroundCont3.style.border = `3px green groove`
})