const textInput = document.getElementById("text-input");
const memeText = document.getElementById("meme-text");
const memeImage = document.getElementById("meme-image");

textInput.addEventListener("input", function () {
  memeText.innerText = textInput.value;
})
