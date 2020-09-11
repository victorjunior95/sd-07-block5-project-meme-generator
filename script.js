window.onload = function () {
    let textInput = document.querySelector("#text-input");
    let memeText = document.createElement("span");
    let container = document.querySelector('.container');

    textInput.addEventListener('keyup', setText);
    function setText () {    
        memeText.innerText = textInput.value     
    }
    memeText.id = 'meme-text';
    container.appendChild(memeText);
}

