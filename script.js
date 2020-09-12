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

let buttonFire = getElementById("fire");
let buttonWater = getElementById("water");
let buttonEarth = getElementById("earth");
let memeImageContainer = getElementById("meme-image-container")

buttonFire.addEventListener("onclick", function () {
    memeImageContainer.style.border = "3px dashed red";
})

buttonWater.addEventListener("onclick", function () {
    memeImageContainer.style.border = "5px double blue";
})

buttonEarth.addEventListener("onclick", function () {
    memeImageContainer.style.border = "6px groove green";
})

