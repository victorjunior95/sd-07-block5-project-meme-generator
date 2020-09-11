let imageInput = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
let textInput = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let container = document.getElementById("meme-image-container");

textInput.addEventListener("keyup", addText);

function addText()
{
    memeText.innerText = textInput.value;
}

imageInput.addEventListener("change", loadImage);

function loadImage(event) {
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src);
    }
  };