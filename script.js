document.getElementById('text-input').addEventListener('keyup', function () {
    document.getElementById('meme-text').innerText = document.getElementById('text-input').value;
})

var loadFile = function (event) {
    //localiza onde a imagem será exibida.
    var memeImage = document.getElementById('meme-image');
    //muda a atibuicao src da imagem itilizando manipulacao de eventose o RL.createObjectURL.
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    //libera a memoria apos a imagem ser carregada na pagina
    memeImage.onload = function () {
        URL.revokeObjectURL(memeImage.src);
    }
};

