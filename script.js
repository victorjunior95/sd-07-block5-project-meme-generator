const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('keyup', inOut);
function inOut() {
  memeText.innerHTML = textInput.value;
}


// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function(event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};


const fireButton = document.getElementById('fire');
fireButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '3px dashed red';
});

const waterButton = document.getElementById('water');
waterButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '5px double blue';
});

const earthButton = document.getElementById('earth');
earthButton.addEventListener('click', function () {
  document.getElementById('meme-image-container').style.border = '6px groove green';
});


const meme1 = document.getElementById('meme-1');
meme1.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme1.png';
});

const meme2 = document.getElementById('meme-2');
meme2.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme2.png';
});

const meme3 = document.getElementById('meme-3');
meme3.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme3.png';
});

const meme4 = document.getElementById('meme-4');
meme4.addEventListener('click', function () {
  document.getElementById('meme-image').src = './imgs/meme4.png';
});
