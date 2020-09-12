const textOutput = document.querySelector('#meme-text');
const textInput = document.querySelector('#text-input');

const imgOutput = document.getElementById('meme-image');

function loadFile() {
  imgOutput.src = URL.createObjectURL(event.target.files[0]);
}

textInput.addEventListener('keyup', () => {
  textOutput.innerText = textInput.value;
});
