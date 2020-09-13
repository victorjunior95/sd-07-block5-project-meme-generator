const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const image = document.querySelector('#meme-image');
const buttonFire = document.querySelector('#fire');
const buttonWater = document.querySelector('#water');
const buttonEarth = document.querySelector('#earth');
const container = document.querySelector('#meme-image-container');

function includeText() {
  textOutput.innerText = textInput.value;
}

textInput.addEventListener('keyup', includeText);

insertImage.addEventListener('change', createImage);

function createImage() {
  image.src = URL.createObjectURL(insertImage.files[0]);

  image.onload = () => URL.revokeObjectURL(image.src);
}

function fireBorder() {
  container.className = 'container';
  container.classList.add('fogo');
}

buttonFire.addEventListener('click', fireBorder);

function waterBorder() {
  container.className = 'container';
  container.classList.add('agua');
}

buttonWater.addEventListener('click', waterBorder);

function earthBorder() {
  container.className = 'container';
  container.classList.add('terra');
}

buttonEarth.addEventListener('click', earthBorder);
