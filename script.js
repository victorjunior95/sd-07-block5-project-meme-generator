window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  // insere texto digitado no input dentro do container do meme
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });

  // Insere a imagem escolhoda no meme generator
  const memeImage = document.querySelector('#meme-image');
  const memeInsert = document.querySelector('#meme-insert');

  function handleFiles(source) {
    const img = document.createElement('img');
    img.src = source;
    img.id = 'image';
    img.className = 'meme-image';
    img.onload = function () {
      URL.revokeObjectURL(this.src);
    };
    // Atualiza a imagem, se alguma já foi carregada anteriormente.
    if (document.querySelector('#image') === null) {
      memeImage.appendChild(img);
    } else {
      const oldImg = document.querySelector('#image');
      memeImage.appendChild(img);
      memeImage.replaceChild(img, oldImg);
    }
  }

  // Carrega imagem do usuário para o meme generator
  memeInsert.addEventListener('change', function() {
    handleFiles(URL.createObjectURL(event.target.files[0]))
  }, false);

  // Altera borda do meme conforme botão acionado
  function changeMemeBorder(setColor, setStyle, setWidth) {
    const memeImageContainer = document.querySelector('#meme-image-container');
    memeImageContainer.style.borderColor = setColor;
    memeImageContainer.style.borderStyle = setStyle;
    memeImageContainer.style.borderWidth = setWidth;
  }

  const buttonFire = document.querySelector('#fire');
  buttonFire.addEventListener('click', function () {
    changeMemeBorder('red', 'dashed', '3px');
  });

  const buttonWater = document.querySelector('#water');
  buttonWater.addEventListener('click', function () {
    changeMemeBorder('blue', 'double', '5px');
  });

  const buttonEarth = document.querySelector('#earth');
  buttonEarth.addEventListener('click', function () {
    changeMemeBorder('green', 'groove', '6px');
  });
  
  // Carrega miniatura pré prontas para o meme generator
  const meme1 = document.querySelector('#meme-1');
  meme1.addEventListener('click', function() {
    handleFiles(meme1.src)
  }, false);

  const meme2 = document.querySelector('#meme-2');
  meme2.addEventListener('click', function() {
    handleFiles(meme2.src)
  }, false);

  const meme3 = document.querySelector('#meme-3');
  meme3.addEventListener('click', function() {
    handleFiles(meme3.src)
  }, false);

  const meme4 = document.querySelector('#meme-4');
  meme4.addEventListener('click', function() {
    handleFiles(meme4.src)
  }, false);
};
