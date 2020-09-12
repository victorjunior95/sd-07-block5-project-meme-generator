function porFrase() {
    let frase = document.getElementById('text-input').value
    document.getElementById('meme-text').innerText = frase
}
let botaoTexto = document.getElementById('enviarTexto');
botaoTexto.addEventListener('click', porFrase)