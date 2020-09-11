let textInput = document.getElementById("text-input");
textInput.addEventListener("keyup", function() {
  console.log(document.getElementById("meme-text").innerText = textInput.value);
});

function loadFile(event) {
  let insertImage = document.getElementById("meme-insert");
  insertImage.addEventListener("click", function() {
    let memeImage = document.getElementById("meme-image");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
      URL.revokeObjectURL(memeImage.src);
    }
  });
  console.log(memeImage);  
}
