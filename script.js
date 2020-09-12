//Visualizar texto do input no canvas da imagem-meme
let textInput = document.getElementById('text-input');
let memeText = document.getElementById('meme-text');

textInput.addEventListener('input', function() {
    memeText.innerText = textInput.value;
})

// O site deve permitir que quem usa faça upload de uma imagem de seu computador.
let imgInput = document.getElementById('meme-insert');
let imgMeme = document.getElementById('meme-image');

imgInput.addEventListener('change',function(event){
    imgMeme.src = URL.createObjectURL(event.target.files[0]);
    imgMeme.onload = function () {
        URL.revokeObjectURL(imgMeme.src);
    }
})