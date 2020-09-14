let textInput = document.getElementById("text-input");
textInput.addEventListener("input", function () {
  let memeText = document.getElementById("meme-text");
  memeText.innerHTML = textInput.value;
});
