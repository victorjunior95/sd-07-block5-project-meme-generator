document.body.onload = function() {
    document.querySelector('#text-input').addEventListener('input', updateText);
}

function updateText(e) {
    document.querySelector('.meme-image-container p').innerText = e.target.value;
}
