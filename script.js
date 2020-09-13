function getInput() {
  const inputText = document.getElementById('text-input').value;
  document.getElementById('meme-text').innerHTML = inputText.toUpperCase();
}

document.getElementById('text-input').addEventListener('keyup', getInput);

function getImage(e) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(e.target.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', getImage);
