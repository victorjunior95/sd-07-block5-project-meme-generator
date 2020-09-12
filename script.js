const textOutput = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');

function loadFile(event) {
  const imgOutput = document.getElementById('meme-image');
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
  imgOutput.onload = () => {
    URL.revokeObjectURL(imgOutput.src);
  };
}

textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});
