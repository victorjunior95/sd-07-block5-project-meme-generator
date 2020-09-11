let inputText = document.querySelector('#text-input');
let insertMeme = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

//memeText.appendChild(inputText.nodeValue);

insertMeme.addEventListener('change', (event) => {
    let arquivos = event.target.files;
    imageMeme.appendChild(document.createElement('img'));
    imageMeme.querySelector('img').setAttribute('width', '500px');
    imageMeme.querySelector('img').setAttribute('height', '500px');
    imageMeme.querySelector('img').src = URL.createObjectURL(arquivos[0]);
    imageMeme.querySelector('img').onload = function() {
    URL.revokeObjectURL(imageMeme.querySelector('img').src);
    }
    console.log(arquivos);
});



