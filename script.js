let text = document.getElementById("text-input");
let boxText = document.getElementById("meme-text");
function textImg() {
  boxText.innerText = text.value;
}

text.addEventListener("change", textImg);
text.addEventListener("keyup", textImg);
