function getValue() {
  const valueInput = document.getElementById('text-input').value;
  const text = document.getElementById('meme-text');
  text.innerHTML = valueInput;
}
