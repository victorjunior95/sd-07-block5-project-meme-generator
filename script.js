window.onload = function () {
  const textMemeIn = document.getElementById('text-input'); //Texto digitado
  const chooseImage = document.getElementById('meme-insert'); //Imagem Selecionada
  const textMemeOut = document.getElementById('meme-text'); //Texto digitado na imagem
  const containerImage = document.getElementById('meme-image');//Imagem na caixa
  let bF = document.getElementById('fire'); //bF = buttonFire
  let bW = document.getElementById('water'); //bW = buttonWater
  let bE = document.getElementById('earth'); //bE = buttonEarth
  textMemeIn.addEventListener('keyup', function () { textMemeOut.innerText = textMemeIn.value; });
  chooseImage.addEventListener('change', function (event) {
    containerImage.src = URL.createObjectURL(event.target.files[0]);
    containerImage.onload = function () { URL.revokeObjectURL(containerImage.src); }
  });  
    bF.addEventListener('click', function () {
    bF = document.getElementById('meme-image-container'); bF.style.border = '3px dashed red';
  });
  bW.addEventListener('click', function () {
    bW = document.getElementById('meme-image-container'); bW.style.border = '5px double blue';
  });
  bE.addEventListener('click', function () {
    bE = document.getElementById('meme-image-container'); bE.style.border = '6px groove green';
  });
  const buttons = document.querySelectorAll('.memes');
  for (let i = 0; i < buttons.length; i += 1) { buttons[i].addEventListener('click', function () { containerImage.src = buttons[i].src; }); }
};
