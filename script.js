document.querySelector('#text-input').addEventListener("keyup", function(){
  document.querySelector('#meme-text').innerText = document.querySelector('#text-input').nodeValue;
})

