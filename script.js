let textoDigitado = document.getElementById("text-input");

textoDigitado.addEventListener("input", function(event){
    let textoMeme = document.getElementById("meme-text");
    let texto = event.target.value;
    textoMeme.innerText = texto;
})