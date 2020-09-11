window.onload = function () {
    let textInput = document.querySelector("#text-input");
    let memeText = document.querySelector("#meme-text");
    function changeText() {
      memeText.innerText = `${textInput.value}`;
    }
    textInput.addEventListener("input",changeText);
}