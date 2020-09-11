const textBox = document.querySelector("#text-input")
const textPresentation = document.querySelector("#meme-text")
function showOnImg () {
    textPresentation.innerHTML = textBox.value;
}

textBox.addEventListener("input", showOnImg);