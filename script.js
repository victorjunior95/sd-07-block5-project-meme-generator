const textBox = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const imageBackground = document.getElementById('meme-insert');
const imagenFundo = document.getElementById('meme-image');

function textInMeme() {
  memeText.innerText = textBox.value;
}

textBox.addEventListener('input', textInMeme);

function memePhoto() {
  imagenFundo.src = URL.createObjectURL(imageBackground.files[0]);
}

imageBackground.addEventListener('change', memePhoto);
