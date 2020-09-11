const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function trocaTexto() {
  memeText.innerText = textInput.value;
}

textInput.addEventListener('keyup', trocaTexto);
