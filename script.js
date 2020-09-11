document.querySelector('#text-input').addEventListener('keyup', function () {
  document.querySelector('#meme-text').innerHTML = document.querySelector('#text-input').value;
});

document.querySelector('#meme-insert').addEventListener('change', function (event) {
  const img = document.querySelector('#image');
  img.src = URL.createObjectURL(event.target.files[0]);
}); /* get code helper on https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977 */
