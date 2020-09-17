
let inputText = document.getElementById("text-input");
inputText.addEventListener("input", function(){
    let showText = document.getElementById("meme-text");
    showText.innerHTML = inputText.value;
});

let inputImage = document.getElementById("meme-insert");
let memeImage = document.getElementById("meme-image");
inputImage.addEventListener("change", function(){
memeImage.src = window.URL.createObjectURL(this.files[0]);
});