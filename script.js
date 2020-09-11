function changeImage() {
  let backgroundImage = document.getElementById("meme-insert").files[0];
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(backgroundImage);
}

function changeText() {
  let memeText = document.getElementById("text-input").value;
  if(memeText.length < 60) {
    document.getElementById("meme-text").innerHTML = memeText;
  } else {
    alert('O texto deve ser menor do que 60 caracteres')
  }
}

// document.getElementById("meme-insert").addEventListener("change", changeImage);
// document.getElementById("text-insert").addEventListener("onChange", changeText);
