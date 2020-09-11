let textInput = document.querySelector('#text-input');
let memeText = document.querySelector('#meme-text');
textInput.addEventListener('keyup',function(){
  memeText.innerHTML=textInput.value;
});