// Acompanhando a explicação do GUGA junto com o colega Ander
let inputText = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

inputText.addEventListener("keyup", function() {
    memeText.innerHTML = inputText.value;
});

let updateFile = function(event) {
    let imageMeme = document.querySelector("#meme-image");
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
    imageMeme.onload = function() {
        URL.revokeObjectURL(imageMeme.src)
    }
};
