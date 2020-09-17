window.onload = function(){
    configInput();
}
function configInput(){
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener("input", function(inputText) {
        let text = inputText.target.value;
        let memeText = document.querySelector("#meme-text");
        memeText.innerText = text;
    });
}