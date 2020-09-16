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

let fireButton = document.getElementById('fire');
fireButton.addEventListener("click", function() {
  container.style.border = "3px dashed red";
});

let waterButton = document.getElementById('water');
waterButton.addEventListener("click", function() {
  container.style.border = "5px double blue";
});

let earthButton = document.getElementById('earth');
earthButton.addEventListener("click", function() {
  container.style.border = "6px groove green";
});
