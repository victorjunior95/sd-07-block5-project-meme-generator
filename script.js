let textInput = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

textInput.addEventListener("input", function () {
  memeText.innerHTML = textInput.value;
});

let memeInsert = document.querySelector("#meme-insert");
let memeImage = document.querySelector("#meme-image");

memeInsert.addEventListener("change", function (event) {
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

