// Entregáveis

// 1
let inputedText = document.querySelector("#text-input");

inputedText.addEventListener("input", function() {
    let memeText = document.querySelector("#meme-text");
    memeText.innerText = inputedText.value;
});

// 2
let inputedImage = document.querySelector("#meme-insert");

inputedImage.addEventListener("change", function() {
    let image = document.querySelector("#meme-image");
    image.src = URL.createObjectURL(event.target.files[0])
});

// Bónus

//6

let buttonFire = document.querySelector("#fire");
let buttonWater = document.querySelector("#water");
let buttonEarth = document.querySelector("#earth");

buttonFire.addEventListener("click", function() {
    let divMeme = document.querySelector("#meme-image-container");
    divMeme.style.border = "3px dashed red"
});

buttonWater.addEventListener("click", function() {
    let divMeme = document.querySelector("#meme-image-container");
    divMeme.style.border = "5px double blue"
});

buttonEarth.addEventListener("click", function() {
    let divMeme = document.querySelector("#meme-image-container");
    divMeme.style.border = "6px groove green"
});

// 7
