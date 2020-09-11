const valueInput = document.getElementById('text-input');
const text = document.getElementById('meme-text');

function getValue() {
  text.innerHTML = valueInput.value;
  document.getElementById('meme-image').innerHTML = valueInput;
}

valueInput.addEventListener('keyup', getValue);
