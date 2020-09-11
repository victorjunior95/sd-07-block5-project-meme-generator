let inputText = document.getElementById("text-input");
let text = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");


inputText.addEventListener("keyup", function() {
    text.innerText = inputText.value;
});

inputImage.addEventListener("change", function(event) {
    let image = document.getElementById("meme-image");
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function() {
        URL.revokeObjectURL(image.src);
    }
});







