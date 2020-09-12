function loadImg(event) {
  const loadImg = document.getElementById("meme-img");

  loadImg.src = URL.createObjectURL(event.target.files[0]);

  loadImg.onload = function () {
    URL.revokeObjectURL(loadImg.src);
  };
}

function loadMeme(event) {
  const loadImg = document.getElementById("meme-image");
  loadImg.src = event.target.src;
}

function applyText() {
  const textInput = document.getElementById("text-input").value;
  const memeText = document.getElementById("meme-text");
  memeText.innerText = textInput;
}

//document.getElementById("meme-image-container").className = borderClassName;

document.getElementById("meme-insert").addEventListener("change", loadImg);

document.getElementById("text-input").addEventListener("input", applyText);

function estilo(){
  return "olokin meo"
}