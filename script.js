
//Text for text meme
let text = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');

text.addEventListener('change', function (){
    memeText.innerText=text.value;
});

//Image for meme
let inputPicuture = document.querySelector('#meme-insert');


inputPicuture.addEventListener('change', function(){
  let picture = document.createElement('img');
  picture.className = 'imgMeme';
  picture.src = URL.createObjectURL(this.files[0]);
  picture.onload = function() {
   URL.revokeObjectURL(this.src);
  }
document.querySelector('#meme-image-container').appendChild(picture);
});