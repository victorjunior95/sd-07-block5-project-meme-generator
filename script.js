window.onload=function () {
  // Função para colocar foto no meme
  const carregaFoto=document.getElementById('insere-foto'); 
  carregaFoto.addEventListener('input', function(event) {
    const url=URL.createObjectURL(event.target.files[0]);
    const saida=document.getElementById('imagem-meme');
    saida.src=url;
  });
  // Função para colocar texto no meme
  const lbltexto=document.getElementById('text-input');
  lbltexto.addEventListener('change', function () {
    const texto=document.getElementById('text-input').value;
    document.getElementById('texto-meme').innerHTML = texto;
  });
}