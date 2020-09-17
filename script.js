const inputText = document.querySelector('#text-input');

inputText.addEventListener ('input', function (){
    const showText = document.querySelector('#meme-text');
showText.innerHTML = inputText.value;
});

const loadFile = function(event) {
  let output = document.querySelector("#meme-image")
    output.src = URL.createObjectURL (event.target.files[0]);
    output.onload = function () {
        URL.revokeObjectURL(output.src);
}
}

let chooseFile = document.querySelector("#meme-insert");
chooseFile.addEventListener('change', loadFile);

let buttonFire = querySelector("#fire");
let buttonWater = querySelector("#water");
let buttonEarth = querySelector("#earth");
let memeImageContainer = querySelector("#meme-image-container")

buttonFire.addEventListener("click", function () {
    memeImageContainer.style.border = "3px dashed red";
})

buttonWater.addEventListener("click", function () {
    memeImageContainer.style.border = "5px double blue";
})

buttonEarth.addEventListener("click", function () {
    memeImageContainer.style.border = "6px groove green";
})
