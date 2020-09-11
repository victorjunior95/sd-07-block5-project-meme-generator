let textInput = document.querySelector('#text-input');
let textOutput = document.querySelector('#meme-text');

textInput.addEventListener('keypress', includeText);

function includeText() {
  textOutput.innerText = textInput.value;
  console.log(textInput.value);
}