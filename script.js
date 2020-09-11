// adicionando texto ao meme
const textInput = document.querySelector('#text-input');
textInput.addEventListener("keyup", updateMemeText);

const memeText = document.querySelector('#meme-text');

function updateMemeText() {
  memeText.innerHTML = textInput.value;
}

// utilizou-se essa referencia
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  const memeImage = document.getElementById('meme-image');

  memeImage.src = URL.createObjectURL(event.target.files[0]);

  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  }
};