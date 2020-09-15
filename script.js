function loadFile(event) {
  const divImage = document.getElementById('meme-image');
  const source = URL.createObjectURL(event.target.files[0]);
  divImage.innerHTML = `<img  class='background-image'
                              src='${source}'
                              id='imageChosen'
                              alt='Imagem de fundo do meme'>
                        </img>`;
}
function insertImage(src) {
  const divImage = document.getElementById('meme-image');
  divImage.innerHTML = `<img  class='background-image'
                              src='/imgs/${src}'
                              alt='Imagem de fundo do meme'>
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
