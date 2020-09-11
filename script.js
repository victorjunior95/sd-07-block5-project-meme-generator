let inputText = document.querySelector("#text-input")
let memeText = document.querySelector(".meme-text")

inputText.addEventListener("keyup", ()=>{
    memeText.innerHTML = inputText.value
})