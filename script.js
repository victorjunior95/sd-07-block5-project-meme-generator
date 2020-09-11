window.onload = function () {

document.querySelector('#text-input').setAttribute('maxlength',60);

let textInputBox = document.querySelector('#text-input');
textInputBox.addEventListener('change', function() {
    let textInput = document.querySelector('#text-input').value;
    let textMeme = document.querySelector('#meme-text');
    textMeme.innerText = textInput ;
})
}

