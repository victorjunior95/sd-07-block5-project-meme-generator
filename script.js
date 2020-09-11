let textInput = document.querySelector('#text-input');
let imageInput = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');

textInput.onchange = () => {
    memeText.innerHTML = textInput.value;
}