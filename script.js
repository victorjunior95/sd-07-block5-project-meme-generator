let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function() {
    let previewText = document.getElementById("meme-text");
    previewText.innerHTML = inputText.value;
})

let inputImage = document.getElementById("meme-insert");

inputImage.addEventListener("input", function() {
    let previewImage = document.getElementById("meme-image");
    previewImage.innerHTML = inputImage.value
})