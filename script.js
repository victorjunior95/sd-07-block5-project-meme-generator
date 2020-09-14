const getInputText = document.getElementById('text-input');
const getDivImage = document.getElementById('meme-image-container');

getInputText.oninput = function () {
  const getParagraph = document.getElementById('meme-text');
  const textInput = getInputText.value;
  getParagraph.innerText = textInput;
};

const loadFile = function (event) {
  const outputImage = document.getElementById('meme-image');
  outputImage.src = URL.createObjectURL(event.target.files[0]);
  outputImage.onload = function () {
    URL.revokeObjectURL(outputImage.src);
  };
  getDivImage.style.backgroundImage = outputImage.src;
};
