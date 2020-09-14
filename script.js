// Acompanhando a explicação do GUGA junto com o colega Ander
let inputText = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");
let memeBorder = document.getElementById("meme-image-container");


inputText.addEventListener("keyup", function() {
    memeText.innerHTML = inputText.value;
});

// linha de comando melhorado no plantão do GUGA com o colega Rodrigo Pardo
//Antes
/*let updateFile = function(event) {
    let imageMeme = document.querySelector("#meme-image");
    imageMeme.src = URL.createObjectURL(event.target.files[0]);
    imageMeme.onload = function() {
        URL.revokeObjectURL(imageMeme.src)
    };
};*/
//Agora
const update = document.getElementById("meme-insert");
const imageMeme = document.querySelector("#meme-image");
 update.addEventListener("change", function() {
    imageMeme.src = window.URL.createObjectURL(this.files[0]);
});

const btnRed = document.getElementById("fire")
btnRed.addEventListener("click", function() {
    memeBorder,className = "redborder";
});
