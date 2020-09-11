//let container = document.getElementById("meme-image-container");

let imgInput = document.querySelector("#meme-insert");
let imgMeme = document.querySelector("#meme-image");

let inputText = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

inputText.addEventListener('input', function() {
    memeText.innerText = inputText.value;
});

imgInput.addEventListener('change', function(event){
    // essa parte aqui foi pega das dicas fornecidas
    imgMeme.src = URL.createObjectURL(event.target.files[0]);
    imgMeme.onload = function() {
      URL.revokeObjectURL(imgMeme.src) 
    }
});