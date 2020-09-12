let cont = document.querySelector('#meme-image-container');
let inputText = document.querySelector('#text-input');
let insertMeme = document.querySelector('#meme-insert');
let memeText = document.querySelector('#meme-text');
let imageMeme = document.querySelector('#meme-image');

inputText.addEventListener('keyup', function() {
    memeText.innerHTML = inputText.value;
    console.log(inputText.value);
});

insertMeme.addEventListener('change', (event) => {
    let arquivos = event.target.files[0];
    imageMeme.src = URL.createObjectURL(arquivos);
    imageMeme.onload = function() {
    URL.revokeObjectURL(imageMeme.src);
    }
});

let botaoFire = document.querySelector('#fire');
botaoFire.addEventListener('click', function() {
    cont.style.border = 'dashed 3px rgb(255 , 0 , 0)';
    imageMeme.style.border = 'dashed 3px rgb(255 , 0 , 0)';
});

let botaoWater = document.querySelector('#water');
botaoWater.addEventListener('click', function() {
    cont.style.border = 'double 5px rgb(0 , 0 , 255)';
    imageMeme.style.border = 'double 5px rgb(0 , 0 , 255)';
});

let botaoEarth = document.querySelector('#earth');
botaoEarth.addEventListener('click', function() {
    cont.style.border = 'groove 6px rgb(0 , 128 , 0)';
    imageMeme.style.border = 'groove 6px rgb(0 , 128 , 0)';
});

let image = document.querySelectorAll('#sessao img');

for (let index of image) {
    index.addEventListener('click', (event) => {
        let imagens = event.path[0];
        imageMeme.src = imagens.src;
        console.log(imagens);
    })
}
