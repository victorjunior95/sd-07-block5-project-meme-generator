let inputText = document.querySelector("#text-input")
let memeText = document.querySelector("#meme-text")
let memeImage = document.querySelector("#meme-image")
let fire = document.querySelector("#fire")
let water = document.querySelector("#water")
let earth = document.querySelector("#earth")

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
    memeImage.style.border = "3px dashed red"
})

water.addEventListener("click", ()=>{
    memeImage.style.border = "5px double blue"
})

earth.addEventListener("click", ()=>{
    memeImage.style.border = "6px groove green"
})