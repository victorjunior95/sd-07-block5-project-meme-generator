// Recupera os elementos HTML por ID.
const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');
const imgInput = document.getElementById('meme-insert');
const imgOutput = document.getElementById('meme-image');

// Cria URL única para documento local recebendo no parametro dados do evento onchange.
function loadImage(event) {
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
// Assim que os dados do arquivo estiverem carregados a URL é descartada .
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}
// Adiciona escutador de eventos no input da imagem.
imgInput.addEventListener('change', loadImage);
// Adiciona escutador de eventos no input do texto.
textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});
