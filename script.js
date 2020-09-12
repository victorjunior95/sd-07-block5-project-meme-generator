let loadFile = function(event) {
  let memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src) // free memory
  }
};
let TextButton = document.querySelector('#text-input');
TextButton.addEventListener('keyup', function () {
  let text = document.getElementById('text-input').value;
  let textInput = document.getElementById('meme-text');
  textInput.innerHTML = text;
});

let memeConteiner = document.querySelector('#meme-image-container');

let fireButton = document.querySelector('#fire');
fireButton.addEventListener('click', function () {
  memeConteiner.style.border = '3px dashed red';
});

let waterButton = document.querySelector('#water');
waterButton.addEventListener('click', function () {
  memeConteiner.style.border = '5px double blue';
});

let earthButton = document.querySelector('#earth');
earthButton.addEventListener('click', function () {
  memeConteiner.style.border = '6px groove green';
});

