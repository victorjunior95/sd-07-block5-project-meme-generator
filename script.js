const getInputText = document.getElementById('text-input');
const getDivImage = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

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

btnFire.addEventListener('click', function (){
  let styles = '3px dashed red';
  getDivImage.style.border = styles;
});

btnWater.addEventListener('click', function (){
  let styles = '5px double blue';
  getDivImage.style.border = styles;
});

btnEarth.addEventListener('click', function (){
  let styles = '6px groove green';
  getDivImage.style.border = styles;
});
