   
let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");
let inputImgMeme = document.querySelector("#meme-insert");
let memeImg = document.querySelector("#meme-image");
let memeContainer = document.querySelector("#meme-image-container");
let fire = document.querySelector("#fire");
let water = document.querySelector("#water");
let earth = document.querySelector("#earth");


textInput.addEventListener("keyup", function() {
    memeText.innerHTML = textInput.value;
});

inputImgMeme.addEventListener("change", function() {
    memeImg.src = URL.createObjectURL(event.target.files[0]);
    memeImg.onload = function() {
        URL.revokeObjectURL(memeImg.src)
    }
});

fire.addEventListener("click", function() {
    memeContainer.style.border =  "3px dashed rgb(255, 0, 0)"
});
water.addEventListener("click", function() {
    memeContainer.style.border =  "5px double rgb(0, 0, 255)"
});
earth.addEventListener("click", function() {
    memeContainer.style.border = "6px groove rgb(0, 128 ,0)"
});



