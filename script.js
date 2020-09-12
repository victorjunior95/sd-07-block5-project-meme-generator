const textOutput = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');
const imgOutput = document.getElementById('meme-image');

function loadImage() {
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}

const imgInput = document.getElementById('meme-insert');
imgInput.addEventListener('change', loadImage);

textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});
