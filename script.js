const textInput = document.getElementById('text-input');

textInput.addEventListener('keyup', function () {
  const memeText = document.getElementById('meme-text');

  memeText.innerHTML = textInput.value;
});

const upload = document.getElementById('meme-insert');
const image = document.getElementById('meme-image');

upload.addEventListener('change', function (event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
});
