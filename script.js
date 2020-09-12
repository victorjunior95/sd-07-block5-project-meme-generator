window.onload = function() {
  let textMemeIn = document.getElementById('text-input');
  let chooseImage = document.getElementById('input-image');
  let textMemeOut = document.getElementById('meme-text');
  let containerImage = document.getElementById('meme-image');
  
  textMemeIn.addEventListener('keyup', function() {
    textMemeOut.innerText = textMemeIn.value; });
  
  chooseImage.addEventListener('change', function(event) {
    containerImage.src = URL.createObjectURL(event.target.files[0]);
    containerImage.onload = function() {
        URL.revokeObjectURL(containerImage.src); }}); 

}
