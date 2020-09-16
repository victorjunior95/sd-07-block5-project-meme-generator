const input = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

input.addEventListener('keyup', function () {
  memeText.innerText = input.value;
});
