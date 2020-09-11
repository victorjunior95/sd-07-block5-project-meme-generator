let insertText = document.querySelector("#text-input");
let textButton = document.querySelector("#text-button");
let container = document.querySelector("#meme-image-container");
let memeText = document.querySelector("#meme-text");


textButton.addEventListener("click", function() {
  memeText.innerHTML = insertText.value;
})