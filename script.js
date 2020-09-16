let textMeme = document.getElementById("text-input")
let imgMeme = document.getElementById("meme-insert")

let memeImg = document.getElementById("meme-image-container")


textMeme.addEventListener("input", function(event){
    let memeText = event.target.value;
    let memeFinal = document.getElementById("meme-text");
    console.log(memeFinal)
    memeFinal.innerText = memeText;
})
    