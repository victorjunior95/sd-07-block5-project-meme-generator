let inputText = document.getElementById("text-input");
let text = document.getElementById("meme-text");
let image = document.getElementById("meme-image");

function insertText (){
    text.innerText = inputText.value;
}

inputText.addEventListener("keyup", insertText);