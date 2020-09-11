//1
const textBox = document.querySelector("#text-input")
const textPresentation = document.querySelector("#meme-text")
function showOnImg () {
    textPresentation.innerHTML = textBox.value;
}

textBox.addEventListener("input", showOnImg);

//2
const source = document.querySelector("#meme-insert")
const image = document.querySelector("#meme-image")
function showTheImg (event) {
    image.src = URL.createObjectURL(event.target.files[0]);
}

source.addEventListener("change", showTheImg);
