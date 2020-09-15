let frase = document.getElementById('text-input');
let linha = document.getElementById('meme-text');
frase.addEventListener('keyup', function (event) {
    linha.innerHTML = event.target.value;
})

let foto = document.getElementById('meme-insert');
let painel = document.getElementById('meme-image');

foto.addEventListener('change', function () {
    painel.src = window.URL.createObjectURL(this.files[0])
})