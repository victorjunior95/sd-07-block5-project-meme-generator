const valueInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');

function getValue() {
  text.innerHTML = valueInput.value;
  document.getElementById('meme-image').innerHTML = valueInput;
}

valueInput.addEventListener('keyup', getValue);

const image = document.getElementById('meme-image');
const insertedImage = document.getElementById('meme-insert');

function changeImage() {
  image.src = URL.createObjectURL(event.target.files[0]);
}

insertedImage.addEventListener('change', changeImage);
