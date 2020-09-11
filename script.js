let textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", function() {
  console.log(document.getElementById("meme-text").innerText = textInput.value);
});


let insertImage = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
insertImage.addEventListener("change", function() {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function() {
    URL.revokeObjectURL(memeImage.src);
  }
});
console.log(memeImage);  

