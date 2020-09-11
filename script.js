window.onload = function () {

let textInputBox = document.querySelector('#text-input').setAttribute('maxlength',60);
textInputBox.addEventListener('change', function() {
    let textInput = document.querySelector('#text-input').value;
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerText = textInput ;
})
}

