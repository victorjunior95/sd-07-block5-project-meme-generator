let loadImage = function(event) {
  let output = document.getElementById('meme-image');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }
};

window.onload = function () {
  const inputText = document.getElementById('text-input');
  const memeText = document.getElementById('meme-text');

  inputText.addEventListener('input', function () {
    memeText.innerHTML = inputText.value;
  })
};