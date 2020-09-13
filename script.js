function getInput() {
  const inputText = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = inputText.toUpperCase();
}

document.getElementById('text-input').addEventListener('keyup', getInput);

