const output = document.querySelector('#meme-text');
const input = document.querySelector('#text-input');

function loadFile(event) {
  let output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = () => {
    URL.revokeObjectURL(output.src);
  };
}

const insertMemeText = () => {
  output.innerHTML = '';
  output.innerText = input.value;
};

const btnSubmitMemeText = document.querySelector('#btnSubmitMemeText');
btnSubmitMemeText.addEventListener('click', insertMemeText);

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnSubmitMemeText.click();
  }
});
