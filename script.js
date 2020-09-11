const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');

const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

function limpaObjectURL(){
  URL.revokeObjectURL(memeImage.src);
}

function trocaTexto() {
  memeText.innerText = textInput.value;
}

function trocaImagem() {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = limpaObjectURL;
}

textInput.addEventListener('keyup', trocaTexto);
memeInsert.addEventListener('change', trocaImagem);
