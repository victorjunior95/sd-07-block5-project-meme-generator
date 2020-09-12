
//Text for text meme
let text = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');

text.addEventListener('keyup', function (){
    memeText.innerText=text.value;
});

//Image for meme
let inputPicuture = document.querySelector('#meme-insert');
inputPicuture.addEventListener('change', function(){
  let picture = document.querySelector('#meme-image');
  picture.className = 'imgMeme';
  picture.src = URL.createObjectURL(this.files[0]);
  picture.onload = function() {
   URL.revokeObjectURL(this.src);
  }
});

//Action buttons
const container = document.getElementById('meme-image-container')
const fire = document.querySelector('#fire');
fire.addEventListener('click', function () {
  container.style.border = "3px dashed red";
})

const water = document.querySelector('#water');
water.addEventListener('click', function (){
  container.style.border = "5px double blue";
})

const earth = document.querySelector('#earth');
earth.addEventListener('click', function(){
  container.style.border = "6px groove green";
})