let container = document.querySelector('#meme-image-container');
let inputText = document.querySelector('#text-input');
let insertMeme = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function() {
    memeText.innerHTML = inputText.value;
    console.log(inputText.value);
})

insertMeme.addEventListener('change', (event) => {
    let arquivos = event.target.files[0];
    imageMeme.appendChild(document.createElement('img'));
    imageMeme.querySelector('img').setAttribute('width', '490');
    imageMeme.querySelector('img').setAttribute('height', '390px');
    imageMeme.querySelector('img').src = URL.createObjectURL(arquivos);
    imageMeme.querySelector('img').onload = function() {
    URL.revokeObjectURL(imageMeme.querySelector('img').src);
    }
});

let botaoFire = document.querySelector('#fire');
botaoFire.addEventListener('click', function() {
    container.style.border = 'dashed 3px rgb(255 , 0 , 0)';
    imageMeme.style.border = 'dashed 3px rgb(255 , 0 , 0)';
})

let botaoWater = document.querySelector('#water');
botaoWater.addEventListener('click', function() {
    container.style.border = 'double 5px rgb(0, 38, 255)';
    imageMeme.style.border = 'double 5px rgb(0, 38, 255)';
})

let botaoEarth = document.querySelector('#earth');
botaoEarth.addEventListener('click', function() {
    container.style.border = 'groove 6px rgb(27, 233, 0)';
    imageMeme.style.border = 'groove 6px rgb(27, 233, 0)';
})