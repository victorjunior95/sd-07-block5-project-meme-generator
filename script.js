let inputText = document.querySelector('#text-input');
let insertMeme = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function() {
    memeText.innerHTML = inputText.value;
    console.log(inputText.value);
})

insertMeme.addEventListener('change', (event) => {
    let arquivos = event.target.files;
    imageMeme.appendChild(document.createElement('img'));
    imageMeme.querySelector('img').setAttribute('width', '495px');
    imageMeme.querySelector('img').setAttribute('height', '395px');
    imageMeme.querySelector('img').src = URL.createObjectURL(arquivos[0]);
    imageMeme.querySelector('img').onload = function() {
    URL.revokeObjectURL(imageMeme.querySelector('img').src);
    }
});