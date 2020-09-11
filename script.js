const textBox = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
textBox.addEventListener("input", textInMeme);

function textInMeme() {
  memeText.innerText = textBox.value;
}
const imageBackground = document.getElementById("meme-insert");
const backgroundContainer = document.getElementById("meme-image-container");
imageBackground.addEventListener("change", memePhoto);
const imagenFundo = document.getElementById("meme-image");

function memePhoto() {
  imagenFundo.src = URL.createObjectURL(imageBackground.files[0]);
}
