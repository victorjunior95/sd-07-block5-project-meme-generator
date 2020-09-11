let textInputBox = document.querySelector("#text-input");
let memeTextBox = document.querySelector("#meme-text");

textInputBox.addEventListener("keyup", function() {
    memeTextBox.innerText = textInputBox.value;
})

let loadFile = function(event) {
    let memeImage = document.querySelector("#meme-image");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src) // free memory
    }
  };