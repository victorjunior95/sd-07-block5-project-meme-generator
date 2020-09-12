let container = document.querySelector('#meme-image-container');
let inputText = document.querySelector('#text-input');
let insertMeme = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function() {
    memeText.innerHTML = inputText.value;
    console.log(inputText.value);
});

imageMeme.appendChild(document.createElement('img'));
imageMeme.querySelector('img').setAttribute('width', '490px');
imageMeme.querySelector('img').setAttribute('height', '390px');

insertMeme.addEventListener('change', (event) => {
    let arquivos = event.target.files[0];
    imageMeme.querySelector('img').src = URL.createObjectURL(arquivos);
    imageMeme.querySelector('img').onload = function() {
    URL.revokeObjectURL(imageMeme.querySelector('img').src);
    }
});

let botaoFire = document.querySelector('#fire');
botaoFire.addEventListener('click', function() {
    container.style.border = 'dashed 3px rgb(255 , 0 , 0)';
    imageMeme.style.border = 'dashed 3px rgb(255 , 0 , 0)';
});

let botaoWater = document.querySelector('#water');
botaoWater.addEventListener('click', function() {
    container.style.border = 'double 5px rgb(0 , 0 , 255)';
    imageMeme.style.border = 'double 5px rgb(0 , 0 , 255)';
});

let botaoEarth = document.querySelector('#earth');
botaoEarth.addEventListener('click', function() {
    container.style.border = 'groove 6px rgb(0 , 128 , 0)';
    imageMeme.style.border = 'groove 6px rgb(0 , 128 , 0)';
});

let image = document.querySelectorAll('#sessao img');

for (let index of image) {
    index.addEventListener('click', (event) => {
        let imagens = event.path[0];
        imageMeme.querySelector('img').src = imagens.src;
    })
}
