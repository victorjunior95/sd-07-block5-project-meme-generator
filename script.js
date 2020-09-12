window.onload = function () {
  document.querySelector('#text-input').setAttribute('maxlength', 60);
  const textInputBox = document.querySelector('#text-input');
  textInputBox.addEventListener('keyup', function () {
    const textInput = document.querySelector('#text-input').value;
    const textMeme = document.querySelector('#meme-text');
    textMeme.innerText = textInput;
  });
  const memeImage = document.querySelector('#meme-image');
  const memeInput = document.querySelector('#meme-insert');
  function upLoadImg(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
  };
  memeInput.addEventListener('change', upLoadImg);
};
