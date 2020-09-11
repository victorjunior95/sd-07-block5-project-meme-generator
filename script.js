
// utilizou-se essa referencia
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  const memeImage = document.getElementById('meme-image');

  memeImage.src = URL.createObjectURL(event.target.files[0]);

  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  }
};