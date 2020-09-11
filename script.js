let inputText = document.getElementById("text-input");
inputText.addEventListener("input", function(){
let showText = document.getElementById("meme-text");
showText.innerHTML = inputText.value;   
}); 





