window.onload = function (){
function getInput() {
  document.getElementById("meme-text").innerText = document.getElementById("text-input").value.toUpperCase();
}

document.getElementById("text-input").addEventListener("change", getInput);

function getImage(e) {
  const memeImage = document.getElementById("meme-image");
  memeImage.src = URL.createObjectURL(e.target.files[0]);
}

document.getElementById('meme-insert').addEventListener("change", getImage);
}
