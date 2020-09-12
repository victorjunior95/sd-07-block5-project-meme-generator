window.onload = function () {
  const textMemeIn = document.getElementById('text-input');
  const chooseImage = document.getElementById('meme-insert');
  const textMemeOut = document.getElementById('meme-text');
  const containerImage = document.getElementById('meme-image');
  let buttonFire = document.getElementById('fire');
  let buttonWater = document.getElementById('water');
  let buttonEarth = document.getElementById('earth');
  const buttonMeme1 = document.getElementById('meme-1');
  const buttonMeme2 = document.getElementById('meme-2');
  const buttonMeme3 = document.getElementById('meme-3');
  const buttonMeme4 = document.getElementById('meme-4');
  textMemeIn.addEventListener('keyup', function () { textMemeOut.innerText = textMemeIn.value; });
  chooseImage.addEventListener('change', function (event) {
    containerImage.src = URL.createObjectURL(event.target.files[0]);
    containerImage.onload = function () { URL.revokeObjectURL(containerImage.src); }; });
  buttonFire.addEventListener('click', function () { 
    buttonFire = document.getElementById('meme-image-container');
    buttonFire.style.border = '3px dashed red'; });
  buttonWater.addEventListener('click', function () { 
    buttonWater = document.getElementById('meme-image-container');
    buttonWater.style.border = '5px double blue'; });
  buttonEarth.addEventListener('click', function () { 
    buttonEarth = document.getElementById('meme-image-container');
    buttonEarth.style.border = '6px groove green'; });
  buttonMeme1.addEventListener('click', function () { containerImage.src = buttonMeme1.src; });
  buttonMeme2.addEventListener('click', function () { containerImage.src = buttonMeme2.src; });
  buttonMeme3.addEventListener('click', function () { containerImage.src = buttonMeme3.src; });
  buttonMeme4.addEventListener('click', function () { containerImage.src = buttonMeme4.src; });
};
