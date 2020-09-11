let text = document.querySelector('#text-input');
text.addEventListener("input", insereTexto);

function insereTexto(){
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerText = text.value;
}