window.onload = function() {
  
  //Função para colocar foto no meme
  let carregaFoto = document.getElementById('insere-foto'); 
  carregaFoto.addEventListener('input', function(event) {
    let url = URL.createObjectURL(event.target.files[0]);
    let saida = document.getElementById('imagem-meme');
    saida.src = url;
  });

  // Função para colocar texto no meme
  let lbltexto = document.getElementById('text-input');
  lbltexto.addEventListener('change', function() {
    let texto = document.getElementById('text-input').value;
    document.getElementById('texto-meme').innerHTML = texto;
  });
  
}
