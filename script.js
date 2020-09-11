window.onload = function () {
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  let memeImage = document.querySelector('#meme-image')
  let memeInsert = document.querySelector('#meme-insert')

  textInput.addEventListener('input', function () {
    memeText.innerText = textInput.value;
  });

  memeInsert.addEventListener('change', function () {
    memeImage.src = memeInsert.files[0].name;
  });

};
