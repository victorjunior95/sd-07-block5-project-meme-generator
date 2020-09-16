window.onload = function () {
    setupTextInput();
}

function setupTextInput() {
    let textInput = document.querySelector("#text-input");
    //textInput.addEventListener("keydown", function(event) -- form alternativa
    textInput.addEventListener("input", function(event) {
        // recuperar o texto digitado
        let text = event.target.value;
        // recuperar o elemento html
        let memeTextParagraph = document.querySelector("#meme-text");
        // atribuir o texto no elemento html
        memeTextParagraph.innerText = text;
    })
}