// A solução para o carregamento da imagem foi adaptada de um post do stackoverflow
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
function loadFile(event) {
  // Captura a div onde será inseria da TAG IMG
  const divImage = document.getElementById('meme-image');

  // Cria o objeto que contém a imagem
  const source = URL.createObjectURL(event.target.files[0]);

  // Insere, na div 'meme-image' a TAG IMG já setando o valor de SRC como o objeto source
  divImage.innerHTML = `<img  class='background-image'
                              src='${source}'
                              alt='Imagem de fundo do meme'>
                        </img>`;
}

window.onload = function () {
  // Captura o elemento onde foi digitado o texto
  const inputText = document.getElementById('text-input');

  // Captura o elemento onde deverá aparecer o texto (em cima da imagem)
  const memeText = document.getElementById('meme-text');

  // Adiciona uma escuta de eventos no elemento onde se deve digitar o texto
  // o 'input' faz com que cada letra digitada ou apagada execute a função abaixo
  inputText.addEventListener('input', function () {
    // O texto contido na caixa de entrada de texto é atribuído (e impresso na tela) ao
    // elemento de texto do Meme
    memeText.innerHTML = inputText.value;
  });

  // const label = document.getElementById("label1");
  // label.addEventListener("click", function(obj) {
  //   console.log(obj);
  // });

  // Captura o elemento que será usado para abrir a caixa de seleção da imagem
  const buttonImage = document.getElementById('meme-insert');

  // Adiciona uma escuta de eventos no elemento que simula um botão
  buttonImage.addEventListener('change', function (event) {
    // Resolvi criar uma função externa (poderia ter escrito o código aqui mesmo)
    loadFile(event);
  });
};
