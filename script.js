const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const choseFile = document.querySelector('#meme-insert');

inputText.addEventListener('input', function () {
  memeText.innerText = inputText.value;
});

choseFile.addEventListener('change', function () {
  document.querySelector('#meme-image').src = window.URL.createObjectURL(choseFile.files[0]);
});
