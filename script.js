window.onload = function() {
  let textMeme = document.querySelectorAll('#text-input');
  let chooseImage = document.querySelectorAll('#input-image');
  
  texteMeme.addEventListener('click', function textDisplay(event) {
    let textBox = document.getElementById('meme-text');
    textBox.innerHTML = textMeme;
  });
  
  chooseImage.addEventListener('change', function(event) {
    let containerImage = document.getElementById('meme-image');
    containerImage.src = URL.createObjectURL(event.target.files[0]);
  });
}
