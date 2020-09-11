let textInputBox = document.querySelector("#text-input");
let memeTextBox = document.querySelector("#meme-text");

textInputBox.addEventListener("keyup", function() {
    memeTextBox.innerText = textInputBox.value;
})