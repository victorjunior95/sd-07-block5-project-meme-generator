const input = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

input.addEventListener("keyup", function () {
  memeText.innerText = input.value;
});


let carregarImg = function (event) {
  let memeImg = document.querySelector("#meme-image");
  memeImg.src = URL.createObjectURL(event.target.files[0]);
  memeImg.onload = function () {
    URL.revokeObjectURL(memeImg.src);
  }
}