let inputText = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");

inputText.addEventListener("input", function(){
  if (inputText.value.length <= 32) {
    memeText.innerText = inputText.value;
  }
})