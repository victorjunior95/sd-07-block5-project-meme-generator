const valueInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image-container');
const waterBorder = document.getElementById('water');
const fireBorder = document.getElementById('fire');
const earthBorder = document.getElementById('earth');

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

waterBorder.addEventListener('click', () => {
  imageContainer.classList.add('water-border');
});

fireBorder.addEventListener('click', () => {
  imageContainer.classList.add('fire-border');
});

earthBorder.addEventListener('click', () => {
  imageContainer.classList.add('earth-border');
});


