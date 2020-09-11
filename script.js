document.getElementById('text-input').addEventListener('keyup', function () {
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
})

let loadFile = function (event) {
    //localiza onde a imagem será exibida.
    let memeImage = document.getElementById('meme-image');
    //muda a atibuicao src da imagem itilizando manipulacao de eventose o RL.createObjectURL.
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    //libera a memoria apos a imagem ser carregada na pagina
    memeImage.onload = function () {
        URL.revokeObjectURL(memeImage.src);
    }
};

let memeContainer = document.getElementById('meme-image-container');

let botaoFire = document.getElementById('fire');
botaoFire.addEventListener('click', function () {
    memeContainer.style.border = "dashed 3px rgb(255, 0, 0)"
});

let botaoWater = document.getElementById('water');
botaoWater.addEventListener('click', function () {
    memeContainer.style.border = "double 5px rgb(0, 0, 255)"
});

let botaoEarth = document.getElementById('earth');
botaoEarth.addEventListener('click', function () {
    memeContainer.style.border = "groove 6px rgb(0, 128, 0)"
});
