function changeImage() {
  let backgroundImage =
document.getElementById('meme-insert').files[0];
let image = document.getElementById('meme-image');
image.src = URL.createObjectURL(backgroundImage);
}

function changeText() {
  let memeText = document.getElementById("text-input").value;
  document.getElementById('meme-text').innerHTML = memeText;

}

document.getElementById('meme-insert').addEventListener("change", changeImage)
document.getElementById('meme-insert').addEventListener("change", changeText)

