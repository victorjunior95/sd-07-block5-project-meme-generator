const script = document.querySelector('#text-input');

//Recupera o local onde quero minha string
script.addEventListener('keyup', function () {
    document.querySelector('#meme-text').innerText = script.value;
});