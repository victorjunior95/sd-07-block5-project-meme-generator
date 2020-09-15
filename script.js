let inputedText = document.querySelector("#text-input");

inputedText.addEventListener("input", function() {
    let memeText = document.querySelector("#meme-text");
    memeText.innerText = inputedText.value;
});