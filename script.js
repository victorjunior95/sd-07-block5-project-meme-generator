let textInputBox = document.getElementById("text-input");
let memeTextBox = document.getElementById("meme-text");
let memeContainer = document.getElementById("meme-image-container");

textInputBox.addEventListener("keyup", function() {
    memeTextBox.innerText = textInputBox.value;
});

// Código abaixo inspirado em https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
let loadFile = function(event) {
    let memeImage = document.getElementById("meme-image");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // free memory
    }
  };

  const buttonGreen = document.getElementById("earth");
  buttonGreen.addEventListener("click", function() {
    memeContainer.style.border = "4px dashed green";
  })

  const buttonRed = document.getElementById("fire");
  buttonRed.addEventListener("click", function() {
    memeContainer.style.border = "4px dashed red";
  })

  const buttonBlue = document.getElementById("water");
  buttonBlue.addEventListener("click", function() {
    memeContainer.style.border = "4px dashed blue";
  })