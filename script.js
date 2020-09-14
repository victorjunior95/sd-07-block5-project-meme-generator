function insertImage() {
  let imageInput = document.querySelector("#meme-insert");
  
  imageInput.addEventListener("change", function() {
    let imageOutput = document.createElement("img");
    imageOutput.id = "meme-image";
    imageOutput.className = "imageBox";
    imageOutput.alt = "Imagem do meme";    
    imageOutput.src = URL.createObjectURL(this.files[0]);
    document.querySelector("#meme-image-container").appendChild(imageOutput);
  });
}

function insertText() {
  let textInput = document.querySelector("#text-input");
  let textOutput = document.createElement("span");
  document.querySelector("#meme-image-container").appendChild(textOutput);  
  textOutput.id = "meme-text";
  textOutput.className = "textBox";
  
  textInput.addEventListener("keyup", function() {
    textOutput.innerText = textInput.value;
  });
}