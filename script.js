const frase = document.getElementById('text-input');
const linha = document.getElementById('meme-text');
frase.addEventListener('keyup', function (event) {
    linha.innerHTML = event.target.value;
})