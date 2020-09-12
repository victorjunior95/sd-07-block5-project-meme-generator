const textInput = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImages = document.getElementById('meme-image');
const button01 = document.querySelector('.button-01');
const button02 = document.querySelector('.button-02');
const button03 = document.querySelector('.button-03');
const imgTip01 = document.querySelector('#meme-1 > img');
const imgTip02 = document.querySelector('#meme-2 > img');
const imgTip03 = document.querySelector('#meme-3 > img');
const imgTip04 = document.querySelector('#meme-4 > img');
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
imgTip01.addEventListener('click', function () {
  memeImages.src=imgTip01.src;
})
imgTip02.addEventListener('click', function () {
  memeImages.src=imgTip02.src;
})
imgTip03.addEventListener('click', function () {
  memeImages.src=imgTip03.src;
});
imgTip04.addEventListener('click', function () {
  memeImages.src=imgTip04.src;
});