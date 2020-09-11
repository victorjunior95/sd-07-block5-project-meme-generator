document.querySelector('#text-input').addEventListener('keyup', function(){
  document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
});