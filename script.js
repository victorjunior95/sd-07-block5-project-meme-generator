const textInput = document.getElementById("text-input");

textInput.addEventListener("input", function () {
const memeTextImage = document.getElementById("meme-text");
memeTextImage.innerHTML = textInput.value
})    
