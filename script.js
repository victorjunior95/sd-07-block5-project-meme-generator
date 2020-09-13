function getInput() {
  const textInput = document.getElementById("text-input").value;
  const textImage = document.getElementsByTagName("p")[0];
  textImage.innerHTML = textInput.toUpperCase()
}

document.getElementById("text-input").addEventListener("change", getInput);


function getImage(e) {
  const memeImage = document.getElementById('meme-image');
  memeImage.src = URL.createObjectURL(e.target.files[0]);
}

document.getElementById('meme-insert').addEventListener('change', getImage);
