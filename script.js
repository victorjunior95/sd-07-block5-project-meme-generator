window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');

  // insere texto digitado no input dentro do container do meme
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });
};
