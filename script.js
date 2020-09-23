const loadImage = function (event) {
  const output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function () {
    URL.revokeObjectURL(output.src);
  };
};
// preparar input do Meme text
window.onload = function () {
  const inputText = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  inputText.addEventListener('input', function () {
    memeText.innerHTML = inputText.value;
  });
};

const container = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
fireButton.addEventListener('click', function () {
  container.style.border = '3px dashed red';
});
const waterButton = document.getElementById('water');
waterButton.addEventListener('click', function () {
  container.style.border = '5px double blue';
});
const earthButton = document.getElementById('earth');
earthButton.addEventListener('click', function () {
  container.style.border = '6px groove green';
});
