const text = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
text.addEventListener('input', function () {
  memeText.innerText = text.value;
});
