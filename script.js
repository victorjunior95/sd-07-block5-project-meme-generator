window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  // insere texto digitado no input dentro do container do meme
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });

  // insere elemento img, com a imagem carregada pelo usurário, dentro co container
  const memeImage = document.querySelector('#meme-image');
  const memeInsert = document.querySelector('#meme-insert');

  function handleFiles (){
    const img = document.createElement('img');
    img.src = URL.createObjectURL(this.files[0]);
    img.id = 'image';
    img.height = 400;
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    }
    // Atualiza a imagem, se alguma foi carregada anteriormente.
    if (document.querySelector('#image') === null) {
      memeImage.appendChild(img);
    } else {
      const oldImg = document.querySelector('#image');
      memeImage.appendChild(img);
      memeImage.replaceChild(img, oldImg);
    }
  }
  memeInsert.addEventListener('change', handleFiles, false);

  // Altera borda do meme conforme botão acionado
  const memeImageContainer = document.querySelector('#meme-image-container');
  const buttonFire = document.querySelector('#fire');
  buttonFire.addEventListener('click', function() {
    memeImageContainer.style.borderColor = 'red';
    memeImageContainer.style.borderStyle = 'dashed';
    memeImageContainer.style.borderWidth = '3px';
  });

  const buttonWater = document.querySelector('#water');
  buttonWater.addEventListener('click', function() {
    memeImageContainer.style.borderColor = 'blue';
    memeImageContainer.style.borderStyle = 'double';
    memeImageContainer.style.borderWidth = '5px';
  });

  const buttonEarth = document.querySelector('#earth');
  buttonEarth.addEventListener('click', function() {
    memeImageContainer.style.borderColor = 'green';
    memeImageContainer.style.borderStyle = 'groove';
    memeImageContainer.style.borderWidth = '6px';
  });
};
