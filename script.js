let text = document.querySelector("#text-input")


text.addEventListener("keyup", function () {
    let textInput = document.querySelector("#text-input").value
    let memeText = document.querySelector("#meme-text")
    memeText.innerText = textInput
})
let buttonFire = document.querySelector("#fire")
buttonFire.addEventListener("click", function () {

    let backGroundCont = document.querySelector("#meme-image-container")
    backGroundCont.style.border = `3px red dashed`
})

let buttonWater = document.querySelector("#water")
buttonWater.addEventListener("click", function () {

    let backGroundCont = document.querySelector("#meme-image-container")
    backGroundCont.style.border = `5px blue double`
 })

let buttonEarth = document.querySelector("#earth")
buttonEarth.addEventListener("click" ,function(){
    
    let backGroundCont = document.querySelector("#meme-image-container")
    backGroundCont.style.border = `6px green groove`
})

 let meme1 = document.querySelector("#meme-1")
 meme1.addEventListener("click" , function(){
   let imageMeme=document.querySelector("#meme-image")
   imageMeme.src=meme1.src
 })

 let meme2 =document.querySelector("#meme-2")
 meme2.addEventListener("click" ,function(){
    let imageMeme=document.querySelector("#meme-image")
    imageMeme.src=meme2.src
})

let meme3 = document.querySelector("#meme-3")
meme3.addEventListener("click" ,function (){
    let imageMeme=document.querySelector("#meme-image")
    imageMeme.src=meme3.src
})

let meme4 = document.querySelector("#meme-4")
meme4.addEventListener("click" ,function(){
    let imageMeme=document.querySelector("#meme-image")
    imageMeme.src=meme4.src
})
