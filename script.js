// Input
const textInput = document.querySelector('#text-input');

// Output
const memeText = document.querySelector('#meme-text');

// Function: input --> output
function inOut() {
  memeText.innerHTML = textInput.value;
}

// Event
textInput.addEventListener('keyup', inOut);

// Reference: https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript
const loadFile = function (event) {
    const image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
};
