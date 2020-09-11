let inputText = document.querySelector("#text-input");
let memeText = document.querySelector("#meme-text");

inputText.addEventListener("keyup", function(){
    memeText.innerText = inputText.value;
}
);

let inputMeme = document.querySelector("#meme-insert");
let memeImage = document.querySelector("#meme-image");

inputMeme.addEventListener("change", function(){
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    memeImage.onload = function() {
        URL.revokeObjectURL(output.src);
      }
}
);