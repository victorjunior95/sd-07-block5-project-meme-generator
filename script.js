function imagemMeme() {
  const imglocal = document.getElementById('meme-image');
  imglocal.src = URL.createObjectURL(event.target.files[0]);
}

function textoMeme() {
  const naCaixa = document.getElementById('text-input');
  const memeTexto = document.getElementById('meme-text');
  function colocandoTexto() {
      memeTexto.innerText = naCaixa.value;
  }

  naCaixa.addEventListener('keyup', function () {
      memeTexto.innerText = naCaixa.value;
});
}

window.onload = function () {
    textoMeme();
  }
