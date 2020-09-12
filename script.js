window.onload = function () {
  const inputText = document.getElementById('text-input');
  let memeText = document.getElementById('meme-text');

  inputText.addEventListener('input', function () {
    memeText.innerHTML = inputText.value;
  });
};
