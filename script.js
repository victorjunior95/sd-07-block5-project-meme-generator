let textMeme = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

textMeme.addEventListener('keyup', function (){
  memeText.innerText = textMeme.value;
});
