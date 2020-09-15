function loadFile(event) {
  const divImage = document.getElementById('meme-image');
  const source = URL.createObjectURL(event.target.files[0]);
  divImage.innerHTML = `<img  class='background-image'
                              src='${source}'
                              id='imageChosen'>
                        </img>`;
}
function insertImage(src) {
  const divImage = document.getElementById('meme-image');
  divImage.innerHTML = `<img  class='background-image'
                              src='/imgs/${src}' >
                             
                        </img>`;
}
window.onload = function () {
  const inputText = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');
  inputText.addEventListener('input', function () {
  memeText.innerHTML = inputText.value;
  });

  const buttonImage = document.getElementById('meme-insert');
  buttonImage.addEventListener('change', function (event) {
    loadFile(event);
  });
}
//consultei o pull requeste de Luciano Brechon - Turma 07 da Trybe para compreender melhor as funções.
//Minha  dificuldade era fazer a imagem do upload aparecer na tela.
//Fiz uma espécie de engenharia reversa primeiro, retirando parte por parte a fim de compreender
//o que cada bloco faz, e então, analisei parte por parte relacionando com o o HTML para compreender 
//todo o conceito. Após a entrega inicial do primeiro commit com apenas 20% pude concluir o resto sozinho.
// link do pull realizado por  Luciano: https://github.com/tryber/sd-07-block5-project-meme-generator/pulls/Berchon
