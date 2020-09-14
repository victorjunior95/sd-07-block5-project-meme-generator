let getInputText = document.getElementById('text-input');

getInputText.oninput = function () {
  let getParagraph = document.getElementById('meme-text');
  let textInput = getInputText.value;
  getParagraph.innerText = textInput;
}
