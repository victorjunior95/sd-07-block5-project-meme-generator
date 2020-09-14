let textMeme = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');
let memeInsert = document.getElementById('meme-insert');

textMeme.addEventListener('keyup', function (){
  memeText.innerText = textMeme.value;
});

