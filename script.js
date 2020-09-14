
window.onload = function() {
document.getElementById('txt-input').addEventListener('keyup', memeTxt);
document.getElementById('meme-insert').addEventListener('change', memeImg);

function memeTxt() {
    let memeText = document.getElementById('txt-input').value.toUpperCase();
    return document.getElementById('meme-text').innerText = memeText;
}

function memeImg() {
    let memeFile = document.getElementsByTagName('input')[1].files[0];
    let memeURL = URL.createObjectURL(memeFile);
    document.getElementsByTagName('img')[0].style.width = 500 + 'px';
    document.getElementsByTagName('img')[0].style.height = 550 + 'px';
    return document.getElementsByTagName('img')[0].src = memeURL;
}
}