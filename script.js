let caixaDeTexto = document.getElementById("text-input");
let textoDiv = document.getElementById("meme-text");

caixaDeTexto.addEventListener("keyup", function () {
    textoDiv.innerHTML = caixaDeTexto.value;
})

//Método tirado do link: https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977

var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
        var output = document.getElementById('meme-image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};



