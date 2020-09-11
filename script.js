function onLoadText() {
    const textoDeEntrada = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = textoDeEntrada;
}
function onLoadImg() {
    const imagemDeEntrada = document.getElementById('meme-image');
    imagemDeEntrada.src = URL.createObjectURL(event.target.files[0]);
    imagemDeEntrada.onload = function () {
      URL.revokeObjectURL(imagemDeEntrada.src);
    };
  }
