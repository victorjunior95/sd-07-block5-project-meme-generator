//  escrevendo em meme-image-container
const textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function () {
  const memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
});

//  colocando imagem em meme-image-container
const memeInput = document.getElementById('meme-insert');

memeInput.addEventListener('change', function (event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
});
