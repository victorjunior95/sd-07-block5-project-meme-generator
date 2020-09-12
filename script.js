const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImage = document.createElement('img');
const memeImages = document.getElementsByClassName('meme-image')[0];
const button01 = document.querySelector('.button-01');
const button02 = document.querySelector('.button-02');
const button03 = document.querySelector('.button-03');
const imgTip01 = document.getElementById('img-tip-01');
const imgTip02 = document.getElementById('img-tip-02');
const imgTip03 = document.getElementById('img-tip-03');
const imgTip04 = document.getElementById('img-tip-04');
const memeImageContainer = document.getElementById('meme-image-container');
textInput.addEventListener('keyup', function() {
  memeText.innerHTML = textInput.value;
});
button01.addEventListener('click', function () {
  memeImageContainer.style.border = '3px red dashed';
});
button02.addEventListener('click', function () {
  memeImageContainer.style.border = '5px blue double';
});
button03.addEventListener('click', function () {
  memeImageContainer.style.border = '6px green groove';
});