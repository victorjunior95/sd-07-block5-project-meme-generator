window.onload = function () {

function getText() {
  let textInput = document.getElementById('text-input').value;
  let memeText = document.getElementById('meme-text');
  memeText.innerText=textInput.toUpperCase();
}

let userText = document.getElementById('text-input');
userText.addEventListener('keyup', getText);

function getImage(event) {
    let memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  }

let memeInsert = document.getElementById('meme-insert');
memeInsert.addEventListener('change', getImage);
}
