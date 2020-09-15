let memeText = document.querySelector("#meme-text");
let inputedText = document.querySelector("#text-input");

inputedText.addEventListener("change", function(){
    memeText.innerText = inputedText.innerText;
});