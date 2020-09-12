const output = document.querySelector('#meme-text');
const input = document.querySelector('#text-input');

function loadFile(event) {
  let output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src);
  };
}

input.addEventListener('keyup', (event) => {
  output.innerText = input.value;
});
