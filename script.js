document.querySelector('#text-input').addEventListener('keyup', function () {
  const text = document.querySelector('#text-input').value;
  document.querySelector('#meme-text').innerText = text;
});

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  const imageHere = document.querySelector('#meme-image');
  imageHere.src = URL.createObjectURL(event.target.files[0]);
});
// essa função serve para gerar uma URL qualquer como src, assim a img não precisa estar na pasta
