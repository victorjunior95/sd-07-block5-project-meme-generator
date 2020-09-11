let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function(){
let showText = document.getElementById("meme-text");
showText.innerHTML = inputText.value;   
});     

let loadFile = function(event) {
    var output = document.getElementById("meme-image")
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src);
}
}

let chooseFile = document.getElementById("meme-insert");
chooseFile.addEventListener('change', loadFile);