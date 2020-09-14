const getInputText = document.getElementById('text-input');
const getDivImage = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const memeImagem = document.getElementById('meme-image');
const imgMeme1 = document.getElementById('meme-1');
const imgMeme2 = document.getElementById('meme-2');
const imgMeme3 = document.getElementById('meme-3');
const imgMeme4 = document.getElementById('meme-4');

getInputText.oninput = function () {
  const getParagraph = document.getElementById('meme-text');
  const textInput = getInputText.value;
  getParagraph.innerText = textInput;
};

const loadFile = function (event) {
  const outputImage = document.getElementById('meme-image');
  outputImage.src = URL.createObjectURL(event.target.files[0]);
  outputImage.onload = function () {
    URL.revokeObjectURL(outputImage.src);
  };
  getDivImage.style.backgroundImage = outputImage.src;
};

btnFire.addEventListener('click', function () {
  const styles = '3px dashed red';
  getDivImage.style.border = styles;
});

btnWater.addEventListener('click', function () {
  const styles = '5px double blue';
  getDivImage.style.border = styles;
});

btnEarth.addEventListener('click', function () {
  const styles = '6px groove green';
  getDivImage.style.border = styles;
});

function getSrc(tagName) {
  const src = tagName.src;
  return src;
}

imgMeme1.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme1);
  memeImagem.src = srcImage;
});

imgMeme2.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme2);
  memeImagem.src = srcImage;
});

imgMeme3.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme3);
  memeImagem.src = srcImage;
});

imgMeme4.addEventListener('click', function () {
  const srcImage = getSrc(imgMeme4);
  memeImagem.src = srcImage;
});

