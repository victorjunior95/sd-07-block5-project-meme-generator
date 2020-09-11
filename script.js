let caixaTexto = document.querySelector("#text-input");
let saidaTexto = document.querySelector("#meme-text");

function insertText() {
  saidaTexto.innerText = caixaTexto.value;
}

caixaTexto.addEventListener("keyup", insertText);

let inputImage = document.querySelector("meme-insert");
let image = document.getElementById("meme-image");

function insertImage(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  document.getElementById("img.loaded").src = URL.createObjectURL(inputImage);
}

inputImage.addEventListener("change", insertImage);
