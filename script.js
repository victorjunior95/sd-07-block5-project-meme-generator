window.onload = function () {
  // Função para colocar foto no meme
  const carregaFoto = document.getElementById('meme-insert');
  carregaFoto.addEventListener('input', function (event) {
    const url = URL.createObjectURL(event.target.files[0]);
    const saida = document.getElementById('meme-image');
    saida.src = url;
    saida.style.height = '450px';
    saida.style.width = '450px';
  });
  // Função para colocar texto no meme
  const lbltexto = document.getElementById('text-input');
  lbltexto.addEventListener('change', function () {
    const texto = document.getElementById('text-input').value;
    document.getElementById('meme-text').innerHTML = texto;
  });
};
