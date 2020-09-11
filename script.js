let textInput = document.getElementById('text-input');
textInput.addEventListener('keyup', function() {
  let memeText = document.getElementById('meme-text');
  memeText.innerHTML = textInput.value;
})