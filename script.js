function insertText() {
  let textInput = document.querySelector("#text-input");
  textInput.addEventListener("keypress", function() {
    let textBox = document.querySelector("#meme-text");
    textBox.innerText = textInput.value;
  })
}

function insertImage() {
  let imageInput = document.querySelector("#meme-insert");
  imageInput.addEventListener("input", function() {
    let imageBox = document.querySelector("#meme-image");
    imageBox.src = imageInput.value;
    imageBox.style.position = "absolute";
  })
}