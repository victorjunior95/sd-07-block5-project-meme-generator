window.onload = function() {

let textInput = document.querySelector("#text-input");
let textBox = document.querySelector("#meme-text");

function receberFrase(){
    textBox.innerHTML = textInput.value;   
    }

textInput.addEventListener("keyup", receberFrase);

}