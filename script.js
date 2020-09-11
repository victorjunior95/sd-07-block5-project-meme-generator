const textInput = document.querySelector('#text-input');
const showText = document.querySelector('#meme-text');

textInput.onchange = () => {
  showText.innerHTML = textInput.value;
};
