// Input
let textInput = document.querySelector('#text-input');

// Output
let memeText = document.querySelector('#meme-text');

// Function: input --> output
function inOut() {
  memeText.innerHTML = textInput.value;
}

// Event
textInput.addEventListener('keyup', inOut);
