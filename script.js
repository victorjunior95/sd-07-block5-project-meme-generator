const caixaTexto = document.querySelector('#text-input');
const memeTexto = document.querySelector('#meme-text');

function escreverMeme () {
    memeTexto.innerText = caixaTexto.value;
}

caixaTexto.addEventListener("input", escreverMeme);