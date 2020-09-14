let inputText = document.querySelector("#text-input")
let memeText = document.querySelector("#meme-text")
let memeImage = document.querySelector("#meme-image")
let container = document.querySelector("#meme-image-container")
let fire = document.querySelector("#fire")
let water = document.querySelector("#water")
let earth = document.querySelector("#earth")
let meme1 = document.querySelector("#meme-1")
let meme2 = document.querySelector("#meme-2")
let meme3 = document.querySelector("#meme-3")
let meme4 = document.querySelector("#meme-4")


inputText.addEventListener("keyup", ()=>{
    memeText.innerHTML = inputText.value
})



// Reference: https://codepen.io/dsr/pen/abOmGZp
function printIMG(event){
    if(event.target.files.length > 0){
        let src = URL.createObjectURL(event.target.files[0])
        memeImage.src = src
    }
}

fire.addEventListener("click", ()=>{
    container.style.border = "3px dashed red"
})

water.addEventListener("click", ()=>{
    container.style.border = "5px double blue"
})

earth.addEventListener("click", ()=>{
    container.style.border = "6px groove green"
})

meme1.addEventListener("click", ()=>{
    memeImage.src = "imgs/meme1.png"
})

meme2.addEventListener("click", ()=>{
    memeImage.src = "imgs/meme2.png"
})

meme3.addEventListener("click", ()=>{
    memeImage.src = "imgs/meme3.png"
})

meme4.addEventListener("click", ()=>{
    memeImage.src = "imgs/meme4.png"
})