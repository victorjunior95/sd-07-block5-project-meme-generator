var texto = document.querySelector("#text-input");
var textoMeme = document.querySelector("#meme-text");

function textoAqui() {
    textoMeme.innerText = texto.value;
}

var loadFile = function (event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src) // free memory
    }
};

texto.addEventListener('input', textoAqui);