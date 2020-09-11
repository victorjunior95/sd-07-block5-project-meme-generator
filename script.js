window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  const memeInsert = document.querySelector('#meme-insert');
  const memeImage = document.querySelector('#meme-image');

  // insere texto digitado no input dentro do container do meme
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });

  memeInsert.addEventListener('change', handleFiles, false)

  function handleFiles () {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(this.files[0]);
    img.id = 'image';
    img.height = 400;
    img.onload = function() {
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
};