const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('image');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');
const buttonEarth = document.getElementById('earth');
const meme_1 = document.getElementById('meme-1');
const meme_2 = document.getElementById('meme-2');
const meme_3 = document.getElementById('meme-3');
const meme_4 = document.getElementById('meme-4');
const img_1 = './imgs/meme-1.png';
const img_2 = './imgs/meme-2.png';
const img_3 = './imgs/meme-3.png';
const img_4 = './imgs/meme-4.png';

memeInsert.addEventListener('change', () => { loadFile(memeInsert.files[0]) });
textInput.addEventListener('input', writeText);
buttonFire.addEventListener('click', changeBorder);
buttonWater.addEventListener('click', changeBorder);
buttonEarth.addEventListener('click', changeBorder);
meme_1.addEventListener('click', () => { loadFile(img_1) });
meme_2.addEventListener('click', () => { loadFile(img_2) });
meme_3.addEventListener('click', () => { loadFile(img_3) });
meme_4.addEventListener('click', () => { loadFile(img_4) });


function loadFile(url) {
  if (typeof url === 'object') {
    image.src = URL.createObjectURL(url);
    image.style.width = '100%';
  } else {
    image.src = url;
    image.style.width = '100%';
  }
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
