const textInput = document.querySelector('#text-input');
const textOutput = document.querySelector('#meme-text');

function includeText() {
  textOutput.innerText = textInput.value + event.key;
  console.log(textInput.value);
}

textInput.addEventListener('keydown', includeText);