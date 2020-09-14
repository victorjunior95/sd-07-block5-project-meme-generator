function insertImage() {
  let imageInput = document.querySelector("#meme-insert");
  let imageOutput = document.querySelector("#meme-image");
  imageInput.addEventListener("change", function() {          
    imageOutput.src = URL.createObjectURL(this.files[0]);
  });
}

function insertText() {
  let textInput = document.querySelector("#text-input");
  let textOutput = document.querySelector("#meme-text");
  textInput.addEventListener("keyup", function() {
    textOutput.innerText = textInput.value;
  });
}