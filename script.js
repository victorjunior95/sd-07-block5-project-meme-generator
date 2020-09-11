let caixaDeTexto = document.getElementById("text-input");
let textoDiv = document.getElementById("meme-text");

caixaDeTexto.addEventListener("keyup", function () {
    
    textoDiv.innerHTML = caixaDeTexto.value;
})