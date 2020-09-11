const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');

memeInsert.addEventListener('change', loadFile);
textInput.addEventListener('input', writeText);
buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);


function loadFile() {
  image.src = URL.createObjectURL(memeInsert.files[0]);
  image.style.width = '100%';

  image.onload = () => URL.revokeObjectURL(image.src);
}

function writeText() {
  memeText.innerText = textInput.value;
}

function changeBorder(event) {
  if (event.target.id == 'fire') {
    memeImageContainer.style.border = '3px dashed red';
  } else if (event.target.id == 'water') {
    memeImageContainer.style.border = '5px double blue';
  } else {
    memeImageContainer.style.border = '6px groove green';
  }
}

