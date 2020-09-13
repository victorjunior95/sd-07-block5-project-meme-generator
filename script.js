// Recupera os elementos HTML por ID.
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');
const imgInput = document.getElementById('meme-insert');
const imgOutput = document.getElementById('meme-image');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const divMemeImageContainer = document.getElementById('meme-image-container');
const divBorderButtons = document.getElementById('divBorderButtons');

// Cria URL única para documento local recebendo no parametro dados do evento onchange.
function loadImage(event) {
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  // Assim que os dados do arquivo estiverem carregados a URL é descartada .
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}
// Adiciona escutador de eventos no input da imagem.
imgInput.addEventListener('change', loadImage);
// Adiciona escutador de eventos no input do texto.
textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});

btnFire.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container fire-border';
});
btnFire.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons fire-border';
});
btnFire.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});

btnWater.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container water-border';
});
btnWater.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons water-border';
});
btnWater.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});

btnEarth.addEventListener('click', () => {
  divMemeImageContainer.className = 'meme-image-container earth-border';
});
btnEarth.addEventListener('mousemove', () => {
  divBorderButtons.className = 'div-border-buttons earth-border';
});
btnEarth.addEventListener('mouseout', () => {
  divBorderButtons.className = 'div-border-buttons';
});
