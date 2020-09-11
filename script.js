//  organizando variáveis de entrada
const textInput = document.getElementById('text-input');
const memeInput = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

//  escrevendo em meme-image-container
textInput.addEventListener('keyup', function () {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
});

//  colocando imagem em meme-image-container
memeInput.addEventListener('change', function (event) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});

//  borda de fogo
fireButton.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});

//  borda de água
waterButton.addEventListener('click', function () {
  container.style.border = '5px double blue';
});

//  borda de terra
earthButton.addEventListener('click', function () {
  container.style.border = '6px groove green';
});

