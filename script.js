window.onload = function () {

textInputBox = document.querySelector('#text-input');
textInputBox.addEventListener('change', function() {
    let textInput = document.querySelector('#text-input').value;
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerText = textInput ;
})
}

