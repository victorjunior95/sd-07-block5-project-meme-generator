let selectTextInput = document.getElementById('text-input');

selectTextInput.addEventListener ('keyup', insertText)

function insertText() {
    let text = document.getElementById('text-input');
    let memeText = document.getElementById('meme-text');

    memeText.innerText = text.value;
}