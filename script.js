function getInput() {
  document.getElementsByTagName("p")[0].innerHTML = document.getElementById("text-input").value.toUpperCase();
}

document.getElementById("text-input").addEventListener("change", getInput);

function getImage(e) {
  const memeImage = document.getElementById("meme-image");
  memeImage.src = URL.createObjectURL(e.target.files[0]);
}

document.getElementById('meme-insert').addEventListener("change", getImage);
