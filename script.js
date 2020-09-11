const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const choseFile = document.querySelector('#meme-insert');
const maxCharacters = 60;

inputText.addEventListener('input', function() {
  memeText.innerText = inputText.value;
});

choseFile.addEventListener('change', function() {
  let imgSrc = window.URL.createObjectURL(choseFile.files[0]);
  document.querySelector('#meme-image').src = imgSrc;
});
