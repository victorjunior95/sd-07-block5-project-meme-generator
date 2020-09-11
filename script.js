let inputText = document.getElementById("text-input");
let text = document.getElementById("meme-text");
let inputImage = document.getElementById("meme-insert");
let image = document.getElementById("meme-image");
let container =  document.getElementById("meme-image-container");
let buttonFire = document.getElementById("fire");
let buttonWater = document.getElementById("water");
let buttonEarth = document.getElementById("earth");
let replacementMemeOne = document.getElementById("meme-1");
let replacementMemeTwo = document.getElementById("meme-2");
let replacementMemeThree = document.getElementById("meme-3");


inputText.addEventListener("keyup", function() {
    text.innerText = inputText.value;
});

inputImage.addEventListener("change", function(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
    image.onload = function() {
        URL.revokeObjectURL(image.src);
    }
});

buttonFire.addEventListener("click", function(){
    container.style.border = "3px dashed red";
});

buttonWater.addEventListener("click", function(){
    container.style.border = "5px double blue";
});

buttonEarth.addEventListener("click", function(){
    container.style.border = "6px groove green";
});

replacementMemeOne.addEventListener("click", function() {
    image.src = replacementMemeOne.src;
});

replacementMemeTwo.addEventListener("click", function() {
    image.src = replacementMemeTwo.src;
});

replacementMemeThree.addEventListener("click", function() {
    image.src = replacementMemeThree.src;
});



