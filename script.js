// Meme input
const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
// Meme Output
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

// Buttons Fire Water Earth
const buttonDefault = document.getElementById('default');
const buttonEarth = document.getElementById('earth');
const buttonFire = document.getElementById('fire');
const buttonWater = document.getElementById('water');

function limpaObjectURL() {
  URL.revokeObjectURL(memeImage.src);
}

function trocaTexto() {
  memeText.innerText = textInput.value;
}

function trocaImagem() {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = limpaObjectURL;
}

// Funções de borda
function borderDefault() {
  const eborder = document.getElementById('meme-image-container');
  eborder.style.borderWidth = '1px';
  eborder.style.borderStyle = 'solid';
  eborder.style.borderColor = 'black';
}
function borderEarth() {
  const eborder = document.getElementById('meme-image-container');
  eborder.style.borderWidth = '6px';
  eborder.style.borderStyle = 'groove';
  eborder.style.borderColor = 'green';
}

function borderFire() {
  const fborder = document.getElementById('meme-image-container');
  fborder.style.borderWidth = '3px';
  fborder.style.borderStyle = 'dashed';
  fborder.style.borderColor = 'red';
}

function borderWater() {
  const wborder = document.getElementById('meme-image-container');
  wborder.style.borderWidth = '5px';
  wborder.style.borderStyle = 'double';
  wborder.style.borderColor = 'blue';
}

textInput.addEventListener('keyup', trocaTexto);
memeInsert.addEventListener('change', trocaImagem);
buttonDefault.addEventListener('click', borderDefault);
buttonEarth.addEventListener('click', borderEarth);
buttonFire.addEventListener('click', borderFire);
buttonWater.addEventListener('click', borderWater);