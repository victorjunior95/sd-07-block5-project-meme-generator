const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const choseFile = document.querySelector('#meme-insert');
const btnFire = document.querySelector("#fire");
const btnWater = document.querySelector("#water");
const btnEarth = document.querySelector("#earth");
const memeImageContainer = document.querySelector("#meme-image-container");

inputText.addEventListener('input', function () {
  memeText.innerText = inputText.value;
});

choseFile.addEventListener('change', function () {
  document.querySelector('#meme-image').src = window.URL.createObjectURL(choseFile.files[0]);
});

btnFire.addEventListener('click', function () {
  memeImageContainer.style.border = '3px dashed red';
});

btnWater.addEventListener('click', function () {
  memeImageContainer.style.border = '5px double blue';
});

btnEarth.addEventListener('click', function () {
  memeImageContainer.style.border = '6px groove green';
});
