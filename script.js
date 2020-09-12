// adicionando texto ao meme
const textInput = document.querySelector('#text-input');
textInput.addEventListener("keyup", updateMemeText);

const memeText = document.querySelector('#meme-text');

function updateMemeText() {
  memeText.innerHTML = textInput.value;
}

// utilizou-se essa referencia para autoload de imagem
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
const loadFile = function (event) {
  const memeImage = document.getElementById('meme-image');

  memeImage.src = URL.createObjectURL(event.target.files[0]);

  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  }
};

// customização de bordas
const memeImageContainer = document.getElementById('meme-image-container');

const fire = document.querySelector('#fire');
fire.addEventListener('click', function(){
  memeImageContainer.style.border = "3px dashed red";
});

const water = document.querySelector('#water');
water.addEventListener('click', function(){
  memeImageContainer.style.border = "5px double blue";
});

const earth = document.querySelector('#earth');
earth.addEventListener('click', function(){
  memeImageContainer.style.border = "6px groove green";
});
