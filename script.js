   
let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");
let inputImgMeme = document.querySelector("#meme-insert");
let memeImg = document.querySelector("#meme-image");


textInput.addEventListener("keyup", function() {
    memeText.innerHTML = textInput.value;
});

inputImgMeme.addEventListener("change", function() {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
    memeImg.onload = function() {
        URL.revokeObjectURL(memeImg.src)
    }
});

