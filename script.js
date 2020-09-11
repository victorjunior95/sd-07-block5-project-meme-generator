let inputText = document.getElementById("text-input");

inputText.addEventListener("input", function(){
let showText = document.getElementById("meme-text");
showText.innerHTML = inputText.value;   
});     

let chooseFile = document.getElementById("meme-insert");

chooseFile.addEventListener("change", function() {
    let imgSrc = window.URL.createObjectURL(choseFile.files[0]);
    document.getElementById("meme-image").src = imgSrc;
})


