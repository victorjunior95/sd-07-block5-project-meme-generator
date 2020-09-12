window.onload = function () {
  const textMemeIn = document.getElementById('text-input');
  const chooseImage = document.getElementById('meme-insert');
  const textMemeOut = document.getElementById('meme-text');
  const containerImage = document.getElementById('meme-image');
  textMemeIn.addEventListener('keyup', function () {
    textMemeOut.innerText = textMemeIn.value;
  });
  chooseImage.addEventListener('change', function (event) {
    containerImage.src = URL.createObjectURL(event.target.files[0]);
    containerImage.onload = function () {
      URL.revokeObjectURL(containerImage.src);
  }}); 
}
