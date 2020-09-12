
window.onload = function() {
document.getElementById('txt-input').addEventListener('keyup', memeTxt);

function memeTxt() {
    memeText = document.getElementById('txt-input').value;
    return document.getElementById('meme-text').innerText = memeText;
}
}