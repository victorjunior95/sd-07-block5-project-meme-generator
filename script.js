const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeText = document.getElementById('meme-text');
const image = document.getElementById('image');

memeInsert.addEventListener('change', loadFile);

function loadFile(event) {
  image.src = URL.createObjectURL(memeInsert.files[0]);
  image.style.width = '500px';
  image.style.height = '500px';

  image.onload = () => URL.revokeObjectURL(image.src);
}