function insertText() {
  let textInput = document.querySelector("#text-input");
  let textOutput = document.createElement("span");
  document.querySelector("#meme-content").appendChild(textOutput);  
  textOutput.id = "meme-text";
  textOutput.style.position = "absolute";
  // textOutput.style.textAlign = "center";
  textOutput.style.color = "white";
  textOutput.style.fontSize = "20pt";
  textOutput.style.paddingBottom = "10px";
  textOutput.style.bottom = "0";
  textOutput.style.textShadow = "3px 3px 3px black";
  textInput.addEventListener("keyup", function() {
    textOutput.innerText = textInput.value;
  });
}

function insertImage() {
  let imageInput = document.querySelector("#meme-insert");
  
  imageInput.addEventListener("change", function() {
    let imageOutput = document.createElement("img");
    imageOutput.id = "meme-image";
    imageOutput.alt = "Imagem do meme";
    imageOutput.style.position = "aboslute";
    imageOutput.src = URL.createObjectURL(this.files[0]);
    document.querySelector("#meme-content").appendChild(imageOutput);
  });
}