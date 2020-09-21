window.onload = function() {
textMeme();
}

function textMeme() {
  let textInput = document.getElementById('text-input');
  textInput.addEventListener('input', function(event) {
  let text = event.target.value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText = text;  
  });
}
