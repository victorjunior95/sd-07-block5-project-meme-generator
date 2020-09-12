window.onload = function () {
  function getText() {
    const textInput = document.getElementById('text-input').value;
    const memeText = document.getElementsByTagName('p');
    memeText.innerText = textInput.toUpperCase();
  }

  const userText = document.getElementById('text-input');
  userText.addEventListener('change', getText);

  function getImage(event) {
    const memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  }

  const memeInsert = document.getElementById('meme-insert');
  memeInsert.addEventListener('change', getImage);
};
