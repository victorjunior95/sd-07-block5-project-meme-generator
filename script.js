window.onload = function () {
  setupMemeTextInput();

}

function setupMemeTextInput() {
  let inputText = document.querySelector("#text-input");
  inputText.addEventListener("keydown", function (event) {
    let text = event.target.value;
    let memeTextP = document.querySelector("#meme-text")
    memeTextP.innerText = text;
  })
}
