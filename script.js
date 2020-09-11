
function getText() {
  let textInput = document.getElementById('text-input').value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText=textInput;
}

let userText = document.getElementById('text-input');
userText.addEventListener('keypress', getText);

