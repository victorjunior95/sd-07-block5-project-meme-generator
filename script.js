const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const button01 = document.querySelector('.button-01');
const button02 = document.querySelector('.button-02');
const button03 = document.querySelector('.button-03');
const memeImageContainer = document.getElementById('meme-image-container');
textInput.addEventListener('keyup', function() {
  memeText.innerHTML = textInput.value;
});
button01.addEventListener('click', function () {
  memeImageContainer.style.border="3px red dashed"
});
button02.addEventListener('click', function () {
  memeImageContainer.style.border="5px blue double"
});
button03.addEventListener('click', function () {
  memeImageContainer.style.border="6px green groove"
});