let inputText = document.querySelector("#text-input")
let memeText = document.querySelector(".meme-text")
let memeImage = document.querySelector("#meme-image")

inputText.addEventListener("keyup", ()=>{
    memeText.innerHTML = inputText.value
})

function printIMG(event){
    if(event.target.files.lenght > 0){
        let src = URL.createObjectURL(event.target.files[0])
        memeImage.src = src
    }
}