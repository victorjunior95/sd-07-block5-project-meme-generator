const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
textInput.addEventListener('keyup', inOut);
function inOut() {
  memeText.innerHTML = textInput.value;
}


// Reference: https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
const image = document.getElementById('meme-image');
const loadFile = function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
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
