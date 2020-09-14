window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text').innerText;
  const memeImage = document.querySelector('#meme-image');
  const memeInsert = document.querySelector('#meme-insert');
  const memeContainer = document.querySelector('#meme-image-container').style.border;
  const fire = document.querySelector('#fire');
  const water = document.querySelector('#water');
  const earth = document.querySelector('#earth');
  const famousMemes = document.querySelectorAll('#famous-memes img');

  textInput.addEventListener('input', function () { memeText = textInput.value; });

  memeInsert.addEventListener('change', function () {
    // codigo abaixo tirei como referecia da Seção Dicas para mostrar a imagem
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.onload = function () { URL.revokeObjectURL(memeImage.src); };
  });

  fire.addEventListener('click', function () { memeContainer = '3px dashed red'; });
  water.addEventListener('click', function () { memeContainer = '5px double blue'; });
  earth.addEventListener('click', function () { memeContainer = '6px groove green'; });

  for (let count = 0; count < famousMemes.length; count += 1) {
    famousMemes[count].addEventListener('click', function (event) {
      memeImage.src = event.target.src;
    });
  }
};
