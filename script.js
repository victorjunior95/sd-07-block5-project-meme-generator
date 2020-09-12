/*function button () {
    const buttonFire = document.querySelector("#fire");
    const buttonWater = document.querySelector("#water");
    const buttonEarth = document.querySelector("#earth");
    buttonFire.addEventListener('click', function () {
        
    })
}
*/
const memeImage = document.querySelector("#meme-image");
function inputText () {
    const textInput = document.querySelector("#text-input");
    textInput.addEventListener('keydown', (event) => {
    memeImage.innerHTML = event.target.value;

    })
}

/*
window.onload
*/