window.onload = function () {
  document.querySelector('#text-input').setAttribute('maxlength', 60);
  const textInputBox = document.querySelector('#text-input');
  textInputBox.addEventListener('keyup', function () {
      const textInput = document.querySelector('#text-input').value;
      const textMeme = document.querySelector('#meme-text');
      textMeme.innerText = textInput;
    });
};
