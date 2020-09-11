let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function() {
    memeText.innerText = textInput.value;
})