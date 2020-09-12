function GeratorMemer(){

  constructor() {
    this.idMeme = null;
    this.textosProntos = [];
    this.memesProntos = [];
    this.geradorId = 0;
  }
function loadImg(event) {
  const loadImg = document.getElementById('meme-image');
  loadImg.src = URL.createObjectURL(event.target.files[0]);
  loadImg.onload = function () {
    URL.revokeObjectURL(loadImg.src);
  };
}

function loadMeme(event) {
  const loadImg = document.getElementById('meme-image');
  loadImg.src = event.target.src;
}

function applyText() {
  const textInput = document.getElementById('text-input').value;
  const memeText = document.getElementById('meme-text');
  memeText.innerText = textInput;
}
function estilo(id) {
  let mudaBorda =id ;
  switch (id) {
    case 'fire':
      mudaBorda = 'meme-image-container fire-border';
      break;
    case 'water':
      mudaBorda = 'meme-image-container water-border';
      break;
    case 'earth':
      mudaBorda = 'meme-image-container earth-border';
    default:
      mudaBorda = 'meme-image-container default-border';
  }

  document.getElementById('meme-image-container').className = mudaBorda;
}

//falta buscar 

document.getElementById('meme-insert').addEventListener('change', loadImg);

document.getElementById('text-input').addEventListener('input', applyText);

}

let geratorMemer = new GeratorMemer();