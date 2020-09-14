
const textInput = document.getElementById('text-input');

textInput.addEventListener('input', function() {
   memeText = document.getElementById('meme-text')
   memeText.innerHTML = textInput.value
});

