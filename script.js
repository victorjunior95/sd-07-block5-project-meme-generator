window.onload = function(){
    setupMemeTextInput();
}

function setupMemeTextInput (){
    let textInput = document.querySelector("#text-input");
    textInput.addEventListener("input", function(event){
        let text = event.target.value;
        let memeTextP = document.querySelector("#meme-text");
        memeTextP.innerText = text;
    });
}