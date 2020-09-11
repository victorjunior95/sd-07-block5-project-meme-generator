const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');

function includeText() {
  textOutput.innerText = textInput.value + event.key;
}

textInput.addEventListener('keydown', includeText);
