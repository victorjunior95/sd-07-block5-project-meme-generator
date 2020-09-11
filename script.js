window.onload = function () {
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  let memeImage = document.querySelector('#meme-image')
  let memeInsert = document.querySelector('#meme-insert')

  textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });

  memeInsert.addEventListener('change', function () {
    // codigo abaixo tirei como referecia da Seção Dicas para mostrar a imagem
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.onload = function () {
      URL.revokeObjectURL(memeImage.src)
    }
  });

};
