// Função para colocar foto no meme
const carregaFoto = document.getElementById('meme-insert');
carregaFoto.addEventListener('input', function (event) {
  const url = URL.createObjectURL(event.target.files[0]);
  const saida = document.getElementById('meme-image');
  saida.src = url;
});
// Função para colocar texto no meme
const lbltexto = document.getElementById('text-input');
lbltexto.addEventListener('keyup', function () {
  const texto = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerText = texto;
});
// Função para borda vermelha tracejada
const borda1 = document.getElementById('fire');
borda1.addEventListener('click', function () {
  const borda = document.getElementById('meme-image');
  borda.style.border = '3px dashed red';
});
// Função para borda dupla azul
const borda2 = document.getElementById('water');
borda2.addEventListener('click', function () {
  const borda = document.getElementById('meme-image');
  borda.style.border = '5px double blue';
});
// Função para borda verde groove
const borda3 = document.getElementById('earth');
borda3.addEventListener('click', function () {
  const borda = document.getElementById('meme-image');
  borda.style.border = '6px groove green';
});
