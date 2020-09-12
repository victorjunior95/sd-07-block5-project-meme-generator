
function getInputValue() {
  const input = document.getElementById('text-input').value;
  const showInput = document.getElementById('meme-text');
  showInput.innerText = input;
}

const loadImage = function (event) {
  const output = document.getElementById('meme-insert');
  const showImage = document.getElementById('meme-image');
  showImage.innerHTML = output;
  showImage.src = URL.createObjectURL(event.target.files[0]);
  showImage.onload = function () {
    URL.revokeObjectURL(showImage.src);
  };
};
