let textMeme = document.getElementById("text-input")
let imgMeme = document.getElementById("meme-insert")




textMeme.addEventListener("input", function(event){
    let memeText = event.target.value;
    let memeFinal = document.getElementById("meme-text");
    console.log(memeFinal)
    memeFinal.innerText = memeText;
})
imgMeme.addEventListener("select",function(event){
    let memeImg = event.target.value;
    let memeFinalImage = document.getElementById("meme-image-container")
    memeFinalImage.style.backgroundImage = memeImg;
})
    