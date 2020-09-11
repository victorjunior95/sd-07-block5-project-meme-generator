const imageMeme = document.querySelector('#meme-image');
const container = document.getElementById('meme-image-container');
const text = document.querySelector('#text-input');

function insereTexto() {
  const textMeme = document.querySelector('#meme-text');
  textMeme.innerText = text.value;
}

text.addEventListener('input', insereTexto);

const memeInsert = document.querySelector('#meme-insert');

function insereImagem(event) {
  imageMeme.src = URL.createObjectURL(event.target.files[0]);
}

memeInsert.addEventListener('change', insereImagem);

function bordaFire() {
  container.style.border = '3px dashed red';
}

function bordaWater() {
  container.style.border = '5px double blue';
}

function bordaEarth() {
  container.style.border = '6px groove green';
}

const buttonFire = document.getElementById('fire');
buttonFire.addEventListener('click', bordaFire);
const buttonWater = document.getElementById('water');
buttonWater.addEventListener('click', bordaWater);
const buttonEarth = document.getElementById('earth');
buttonEarth.addEventListener('click', bordaEarth);

function mini1() {
  imageMeme.src = 'imgs/meme1.png';
}

function mini2() {
  imageMeme.src = 'imgs/meme2.png';
}

function mini3() {
  imageMeme.src = 'imgs/meme3.png';
}

function mini4() {
  imageMeme.src = 'imgs/meme4.png';
}

const miniMeme1 = document.getElementById('meme-1');
miniMeme1.addEventListener('click', mini1);
const miniMeme2 = document.getElementById('meme-2');
miniMeme2.addEventListener('click', mini2);
const miniMeme3 = document.getElementById('meme-3');
miniMeme3.addEventListener('click', mini3);
const miniMeme4 = document.getElementById('meme-4');
miniMeme4.addEventListener('click', mini4);
