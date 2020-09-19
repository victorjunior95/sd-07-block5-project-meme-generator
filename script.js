window.onload = function () {
  memeTextInput();
};

function memeTextInput() {
  let inputText = document.querySelector("#text-input");
  let memeText = document.querySelector("#meme-text");
  inputText.addEventListener("keyup", function () {
    memeText.innerText = inputText.value;
  });
}
