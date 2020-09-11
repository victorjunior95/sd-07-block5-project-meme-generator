let insertText = document.querySelector("#text-input");
let textButton = document.querySelector("#text-button");
let container = document.querySelector("#meme-image-container");
let memeImage = document.querySelector("#meme-image");
let memeText = document.querySelector("#meme-text");


textButton.addEventListener("click", function() {
  memeText.innerHTML = insertText.value;
})

let loadFile = function(event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src)
  }
}