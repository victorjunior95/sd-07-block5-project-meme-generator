function textoMeme() {
  const naCaixa = document.getElementById('text-input');
  const memeTexto = document.getElementById('meme-text)';
  function colocandoTexto() {
      memeTexto.innerText = naCaixa.value;
  }

  naCaixa.addEventListener('keyup', colocandoTexto);
}

window.onload = function () {
    textoMeme();
  };
