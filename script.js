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

  function handleFiles() {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(this.files[0]);
    img.id = 'image';
    img.className = 'meme-image';
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
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
  function changeMemeBorder(setColor, setStyle, setWidth) {
    const memeImageContainer = document.querySelector('#meme-image-container');
    memeImageContainer.style.borderColor = setColor;
    memeImageContainer.style.borderStyle = setStyle;
    memeImageContainer.style.borderWidth = setWidth;
  }

  const buttonFire = document.querySelector('#fire');
  buttonFire.addEventListener('click', function() {
    changeMemeBorder('red', 'dashed', '3px');
  });

  const buttonWater = document.querySelector('#water');
  buttonWater.addEventListener('click', function() {
    changeMemeBorder('blue', 'double', '5px');
  });

  const buttonEarth = document.querySelector('#earth');
  buttonEarth.addEventListener('click', function() {
    changeMemeBorder('green', 'groove', '6px');
  });

  // Carrega miniatura pré prontas no meme generator
  function changeImage() {
    const img = document.createElement('img');
    img.src = this.src;
    img.id = 'image';
    img.className = 'meme-image';
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
    // Atualiza a imagem, se alguma foi carregada anteriormente.
    if (document.querySelector('#image') === null) {
      memeImage.appendChild(img);
    } else {
      const oldImg = document.querySelector('#image');
      memeImage.appendChild(img);
      memeImage.replaceChild(img, oldImg);
    }
  }

  const meme1 = document.querySelector('#meme-1');
  meme1.addEventListener('click', changeImage);

  const meme2 = document.querySelector('#meme-2');
  meme2.addEventListener('click', changeImage);

  const meme3 = document.querySelector('#meme-3');
  meme3.addEventListener('click', changeImage);

  const meme4 = document.querySelector('#meme-4');
  meme4.addEventListener('click', changeImage);
}
