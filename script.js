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
                              id='imageChosen'
                              alt='Imagem de fundo do meme'>
                        </img>`;
}

function borderChange () {
  // Captura os elementos das miniaturas das bordas
  const air = document.getElementById('air');
  const fire = document.getElementById('fire');
  const water = document.getElementById('water');
  const earth = document.getElementById('earth');

  // Coptura o elemento onde deverá ser inserido a borda
  const image = document.getElementById('meme-image-container');

  // Adicionando as escutas
  air.addEventListener('click', function () {
    image.style.borderColor = 'black';
    image.style.borderStyle = 'solid';
    image.style.borderWidth = '1px';
  });

  fire.addEventListener('click', function () {
    image.style.borderColor = 'red';
    image.style.borderStyle = 'dashed';
    image.style.borderWidth = '3px';
  });

  water.addEventListener('click', function () {
    image.style.borderColor = 'blue';
    image.style.borderStyle = 'double';
    image.style.borderWidth = '5px';
  });

  earth.addEventListener('click', function () {
    image.style.borderColor = 'green';
    image.style.borderStyle = 'groove';
    image.style.borderWidth = '6px';
  });
}

function imageChange () {
  // Captura a div onde será inseria da TAG IMG
  const divImage = document.getElementById('meme-image');

  // Captura os elementos das miniaturas dos memes
  const meme1 = document.getElementById('meme-1');
  const meme2 = document.getElementById('meme-2');
  const meme3 = document.getElementById('meme-3');
  const meme4 = document.getElementById('meme-4');

  // Adicionando as escutas
  meme1.addEventListener("click", function () {
    // Insere, na div 'meme-image' a TAG IMG já setando o valor de SRC como o objeto source
    divImage.innerHTML = `<img  class='background-image'
                                src='/imgs/meme1.png'
                                alt='Imagem de fundo do meme'>
                              </img>`;
  });

  meme2.addEventListener("click", function () {
    // Insere, na div 'meme-image' a TAG IMG já setando o valor de SRC como o objeto source
    divImage.innerHTML = `<img  class='background-image'
                                src='/imgs/meme2.png'
                                alt='Imagem de fundo do meme'>
                              </img>`;
  });

  meme3.addEventListener("click", function () {
    // Insere, na div 'meme-image' a TAG IMG já setando o valor de SRC como o objeto source
    divImage.innerHTML = `<img  class='background-image'
                                src='/imgs/meme3.png'
                                alt='Imagem de fundo do meme'>
                              </img>`;
  });

  meme4.addEventListener("click", function () {
    // Insere, na div 'meme-image' a TAG IMG já setando o valor de SRC como o objeto source
    divImage.innerHTML = `<img  class='background-image'
                                src='/imgs/meme4.png'
                                alt='Imagem de fundo do meme'>
                              </img>`;
  });

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

  // Captura o elemento que será usado para abrir a caixa de seleção da imagem
  const buttonImage = document.getElementById('meme-insert');

  // Adiciona uma escuta de eventos no elemento que simula um botão
  buttonImage.addEventListener('change', function (event) {
    // Resolvi criar uma função externa (poderia ter escrito o código aqui mesmo)
    loadFile(event);
  });

  imageChange();

  borderChange();
};
