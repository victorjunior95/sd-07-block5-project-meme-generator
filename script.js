document.querySelector('#text-input').addEventListener('keyup', function () {
  const text = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerText = text;
});

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  const imageHere = document.querySelector('#meme-image');
  imageHere.src = URL.createObjectURL(event.target.files[0]);
});
// essa função serve para gerar uma URL qualquer como src, assim a img não precisa estar na pasta

document.querySelector('#fire').addEventListener('click', function () {
  let toFire = document.querySelector('#meme-image-container');
  toFire.style.border = '3px dashed red';
});

document.querySelector('#water').addEventListener('click', function () {
  let toWater = document.querySelector('#meme-image-container');
  toWater.style.border = '5px double blue';
});

document.querySelector('#earth').addEventListener('click', function () {
  let toEarth = document.querySelector('#meme-image-container');
  toEarth.style.border = '6px groove green';
});