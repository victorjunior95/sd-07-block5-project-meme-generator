window.onload = function () {
  function getText() {
    const textInput = document.getElementById('text-input').value;
    let memeText = document.getElementById('meme-text');
    memeText.innerText = textInput.toUpperCase();
}

  const userText = document.getElementById('text-input');
  userText.addEventListener('keyup', getText);

  function getImage(event) {
    const memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
}

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', getImage);
};
