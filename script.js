
console.log('teste')

function getValue() {
  let valueInput = document.getElementById('text-input').value;
  let text = document.getElementById('meme-text');
  text.innerHTML = valueInput;
}