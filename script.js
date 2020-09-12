let text = document.getElementById('text-input');

text.addEventListener ('keyup', insertText);

function insertText() {    
    let memeText = document.getElementById('meme-text');

    memeText.innerText = text.value;
}

let image = document.getElementById('meme-insert');

image.addEventListener ('change', function (event) {
    let imageOutput = document.getElementById('meme-image');
    imageOutput.src = URL.createObjectURL(event.target.files[0]);    
})